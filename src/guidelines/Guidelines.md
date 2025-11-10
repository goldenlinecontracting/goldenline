# Project Guidelines

This file documents the project's conventions and contribution expectations. Keep it if:
- Multiple people collaborate on the repo, or
- You plan to open-source the project, or
- You want consistent commit messages, branching, testing and review rules.

If this is a personal one-off project and you prefer no formal rules, removing it is fine. However, keeping a short guideline helps future you or collaborators.

Suggested minimal sections:
- Purpose: short description of why guidelines exist.
- Code style: linter/formatter and key preferences (e.g. Prettier, ESLint, 2-space indent).
- Branching: how feature branches and main branch are used.
- Commit messages: brief convention (e.g. Conventional Commits).
- Pull requests: required reviewers, CI, and changelog expectations.
- Testing & CI: how to run tests locally and CI links.
- Release/versioning: semantic versioning rules if applicable.
- Contacts: who to ask for reviews or decisions.

Minimal template you can use or expand:

## Purpose
Explain the goal of these guidelines (consistency, faster reviews, fewer regressions).

## Code Style
- Use the project's linter/formatter: add commands to run them (e.g. `npm run lint`, `npm run format`).
- Key rules: indent size, semicolons, quote style, etc.

## Branching & PRs
- Branch naming: `feature/...`, `fix/...`, `chore/...`.
- Open a PR when a feature/fix is ready; request at least one reviewer.
- Ensure CI passes before merging.

## Commits
- Prefer a short structured style (e.g. `feat:`, `fix:`, `docs:`).
- Write concise summary and, if useful, reference issue numbers.

## Tests & CI
- How to run tests locally.
- Which checks CI runs and which must pass.

## Releases
- Use semantic versioning (MAJOR.MINOR.PATCH) if releasing.
- Update changelog or release notes when merging features/fixes.

## Contacts
- List project owners or maintainers.

Keep this file short and actionable. Expand only the sections you actually enforce.
