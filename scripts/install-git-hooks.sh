#!/usr/bin/env bash
# Install SteelR git hooks (one-off).
# Run from repo root: bash scripts/install-git-hooks.sh

set -e

REPO_ROOT="$(git rev-parse --show-toplevel)"
HOOK_FILE="$REPO_ROOT/.git/hooks/pre-commit"

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
