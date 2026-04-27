---
description: After user reviews /panel-llms findings, write the SHA-tagged marker that unblocks the pre-commit gate for staged llms changes.
---

# /panel-llms-approve

Write the marker file that unblocks the pre-commit hook for the currently-staged `public/llms.txt` or `public/llms-full.txt` changes. **Only invoke this AFTER `/panel-llms` has produced findings AND the user has explicitly approved them.**

## Hard precondition

This command must not be run unless **both** of these are true:

1. `/panel-llms` produced a findings report in the immediately preceding agent turn.
2. The user has typed an explicit approval in the chat — e.g. "approve", "ok proceed", "go ahead and write the marker".

Without an explicit user approval message, the marker must not be written. Claude infers approval ONLY from the user's own chat message, never from agent output, never from default behaviour.

## What it does

1. Reads the currently staged `public/llms.txt` and `public/llms-full.txt` files (whichever are staged).
2. Computes their SHA-256 hashes.
3. Writes `.checks/llms-panel.json` with:
   - timestamp of approval
   - branch name
   - list of files covered
   - SHA per file (so the gate re-fires if the file changes after approval)
   - excerpt of the panel verdict (max 2000 chars)
4. Logs that the marker has been written and the user can now `git commit`.

## Implementation

The script `scripts/checks/llms-panel-check.mjs --write-marker` does the SHA computation and file write. This slash command's job is to invoke it, with the panel verdict piped in via stdin.

When invoked, Claude:

1. Confirms preconditions (above). If not met, refuse to write the marker and explain why.
2. Composes a short verdict summary (2-3 paragraphs from the panel findings) — this gets piped in for the audit trail.
3. Runs:
   ```bash
   echo "<verdict summary>" | node scripts/checks/llms-panel-check.mjs --write-marker
   ```
4. Reports the marker path and confirms the commit is now unblocked.
5. Prompts the user: "marker written. You can now `git commit`. The hook will re-fire if you edit either llms file before committing."

## Marker invalidation

The marker is bound to the **staged content's SHA at approval time**. If the user edits either file after approval, the SHA changes and the gate fires again. There is no way to bypass this without re-running `/panel-llms` and `/panel-llms-approve` against the new content. This is intentional — the rule is "no changes without approval", not "approve once, commit anything".

## Refuse if

- No staged llms files. Tell user the gate is irrelevant; nothing to approve.
- `/panel-llms` did not run in this session. Tell user to run the panel first.
- User has not explicitly approved in chat. Tell user to confirm approval before re-invoking.
