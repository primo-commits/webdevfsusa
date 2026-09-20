# FeeSlayers Site

Next.js 15 (App Router) + React 19 + Tailwind 3 + TypeScript. Multi-region
marketing site: `app/us`, `app/canada`, `app/landing`, with Spanish and French
content in `lib/industries-es.ts`, `lib/industries-fr.ts`, `lib/translations.ts`.

## Working agreement: never lose work

These rules exist because this project is often edited from a disposable cloud
container. Follow them on every change, without being asked.

### 1. Snapshot before edit (automatic)

A `PreToolUse` hook in `.claude/settings.json` runs `scripts/snapshot-file.sh`
before any Edit/Write, copying the current file to
`.snapshots/<UTC timestamp>/<path>`. When editing through shell commands
(`sed`, heredocs) instead of the edit tools, the hook does not fire - call the
script by hand first:

```bash
scripts/snapshot-file.sh app/page.tsx components/Navbar.tsx
```

`.snapshots/` is gitignored. It is a local convenience for eyeballing or
restoring a previous version as a plain file; it is NOT durable storage.

### 2. Commit every change, one change per commit

Every meaningful change gets its own commit as soon as it works. Commits are
the real version history - each one is a complete, restorable snapshot of the
whole project, so nothing is ever destructively overwritten.

Never amend, rebase, force-push, `git reset --hard`, or `git checkout --` over
uncommitted work. Recovering an old version is `git show <sha>:path/to/file`,
never deleting the current one.

### 3. Do NOT push unless the user asks

Pushing is on request only. Commit freely; hold pushes.

Because an unpushed commit lives only in this container and is lost if the
container is reclaimed, tell the user when unpushed commits accumulate (say,
more than 3, or before a long pause) so they can choose to push. State it as a
reminder, not a prompt to act on unilaterally.

Check with: `git log --oneline origin/<branch>..HEAD`

### 4. Never create versioned filenames

No `page-v2.tsx`, `page-final.tsx`, `Navbar-backup.tsx`. Next.js routing is
filename-based and stale duplicates silently break routes and imports. Version
history lives in git and `.snapshots/`, never in the filename.

### 5. Branch

Work on `claude/bold-euler-kmlufx`. Never commit to `main`, and never open a
pull request unless explicitly asked.

## Design work

The `ui-ux-pro-max` skill bundle is installed in `.claude/skills/`. Before
making visual or UX decisions - styles, palettes, type pairings, chart choices,
accessibility - query the local database rather than improvising:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain style --stack nextjs
```

Domains: `style`, `color`, `chart`, `landing`, `product`, `ux`, `typography`,
`icons`, `gsap`, `react`, `web`, `google-fonts`.

Companion skills: `design`, `design-system`, `ui-styling`, `brand`,
`banner-design`, `slides`.

## Verify before committing

```bash
npm run build    # must pass - catches type errors and broken routes
npm run lint
```
