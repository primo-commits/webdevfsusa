#!/usr/bin/env bash
# Pre-edit snapshot: copies a file to .snapshots/<UTC timestamp>/<path> before it is modified.
# Invoked as a Claude Code PreToolUse hook (Edit/Write) and runnable by hand:
#   scripts/snapshot-file.sh app/page.tsx
# Never fails the caller - a snapshot problem must not block an edit.

set -uo pipefail

ROOT="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"
STAMP="$(date -u +%Y-%m-%dT%H-%M-%SZ)"
DEST="$ROOT/.snapshots/$STAMP"

snapshot() {
  local target="$1"
  [ -z "$target" ] && return 0
  [ -f "$target" ] || return 0            # new file: nothing to preserve yet
  local rel="${target#"$ROOT"/}"
  mkdir -p "$DEST/$(dirname "$rel")" 2>/dev/null || return 0
  cp -p "$target" "$DEST/$rel" 2>/dev/null && echo "snapshot: $rel -> .snapshots/$STAMP/$rel"
  return 0
}

if [ "$#" -gt 0 ]; then
  for f in "$@"; do snapshot "$f"; done
else
  # Hook mode: Claude Code sends tool JSON on stdin.
  payload="$(cat)"
  file_path="$(printf '%s' "$payload" | python3 -c '
import json, sys
try:
    data = json.load(sys.stdin)
except Exception:
    sys.exit(0)
print(data.get("tool_input", {}).get("file_path", "") or "")
' 2>/dev/null)"
  snapshot "$file_path"
fi

exit 0
