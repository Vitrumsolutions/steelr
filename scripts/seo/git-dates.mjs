/**
 * git-dates.mjs: last-commit date for a file, safe in shallow clones.
 *
 * WHY: Vercel builds from a shallow clone (about 10 commits deep). In a shallow
 * clone, `git log -1 -- <file>` for a file that was not touched inside the
 * available history returns the oldest commit the clone has (the "shallow
 * boundary"), so every untouched file gets the same recent date. The same
 * reader fixed this on vitrums.co.uk on 2026-09-27, where it had stamped posts
 * last edited in May and June with a 27 Sep date: the "page dates changed to
 * look fresh" pattern Google warns about.
 *
 * RULE: a date is returned only when the file's last commit is a real commit
 * inside the available history. If that commit is a shallow-boundary commit,
 * or git is unavailable, the date is unknown (null) and callers keep the value
 * already committed in their JSON, which was generated with full history.
 */
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

export function makeGitDateReader(root) {
  // execFileSync with an argument list: no shell, so file names are never
  // reinterpreted, and ":(literal)" stops git reading "[slug]" as a glob.
  const run = (args) =>
    execFileSync("git", args, { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();

  let boundary = new Set();
  let shallow = false;
  try {
    shallow = run(["rev-parse", "--is-shallow-repository"]) === "true";
    if (shallow) {
      const shallowFile = resolve(root, run(["rev-parse", "--git-path", "shallow"]));
      if (existsSync(shallowFile)) {
        boundary = new Set(readFileSync(shallowFile, "utf8").split(/\s+/).filter(Boolean));
      }
    }
  } catch {
    /* not a git checkout: every lookup below returns null */
  }

  function lastCommitDate(relPath) {
    try {
      const out = run(["log", "-1", "--format=%H %cI", "--", `:(literal)${relPath}`]);
      if (!out) return null;
      const [sha, date] = out.split(" ");
      if (!sha || !date || boundary.has(sha)) return null;
      return date;
    } catch {
      return null;
    }
  }

  return { lastCommitDate, shallow };
}

/** Read a JSON file, or return the fallback if it is missing or invalid. */
export function readJson(path, fallback) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    return fallback;
  }
}
