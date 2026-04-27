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
# Runs brand-guard against staged files. Blocks the commit on violation.
# To bypass PRICE violations only, include [allow-price] in commit message.

set -e
node scripts/brand-guard.mjs --staged
EOF

chmod +x "$HOOK_FILE"
echo "✓ Pre-commit hook installed at .git/hooks/pre-commit"
echo "  Runs scripts/brand-guard.mjs --staged on every commit."
echo "  To bypass PRICE violations: include [allow-price] in commit message."
