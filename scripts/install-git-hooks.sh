#!/usr/bin/env bash
# Install SteelR git hooks (one-off).
# Run from repo root: bash scripts/install-git-hooks.sh

set -e

# Use --git-common-dir so this works inside git worktrees (where .git is a
# file pointing at the shared gitdir, not a directory). Falls back to the
# normal location for non-worktree clones.
GIT_COMMON_DIR="$(git rev-parse --git-common-dir)"
HOOKS_DIR="$GIT_COMMON_DIR/hooks"
HOOK_FILE="$HOOKS_DIR/pre-commit"

mkdir -p "$HOOKS_DIR"

cat > "$HOOK_FILE" <<'EOF'
#!/usr/bin/env bash
# SteelR pre-commit hook.
#
# Runs two gates in order:
#   1. brand-guard: blocks staged files containing SteelR-attributed prices
#      or brand-banned words. To bypass PRICE violations only, include
#      [allow-price] in commit message.
#   2. llms-panel-check: blocks any commit touching public/llms.txt or
#      public/llms-full.txt unless the user has approved the staged content
#      via /panel-llms-approve. SHA-matched, so fresh edits force a fresh
#      panel run. No bypass — these files are the strongest AI-citation
#      surface and must not change without explicit approval.

set -e
node scripts/brand-guard.mjs --staged
node scripts/checks/llms-panel-check.mjs --enforce
EOF

chmod +x "$HOOK_FILE"
echo "✓ Pre-commit hook installed at .git/hooks/pre-commit"
echo "  Runs scripts/brand-guard.mjs --staged on every commit."
echo "  To bypass PRICE violations: include [allow-price] in commit message."
