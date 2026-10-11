# 🚀 Releasing

Releases are cut **manually from your machine** with [release-it](https://github.com/release-it/release-it). There is no release workflow in GitHub Actions.

## ✅ Before you start

- You are on `master`, it is up to date and the working tree is clean.
- `npm ci` has been run (Node version: see `.nvmrc`).
- Commits are **signed** (release-it creates the release commit with `-S`), so GPG/SSH signing has to be configured.
- A **GitHub token** is available in the `GITHUB_TOKEN` environment variable.

> 🔑 The token is how release-it creates the GitHub release and uploads the built file. Without it, release-it falls back to a web-based release and **does not attach** `dist/*.user.js`.
> The easiest way to provide it is the GitHub CLI: `GITHUB_TOKEN=$(gh auth token) npm run release`

## 📦 Cutting a release

```sh
GITHUB_TOKEN=$(gh auth token) npm run release
```

release-it asks for the new version (semantic versioning) and then:

1. 🔢 bumps `version` in `package.json`,
2. 🏗️ runs `npm run build` (typecheck + build to `dist/monkey-redmine-time-widget.user.js`),
3. 📝 regenerates `CHANGELOG.md` with `auto-changelog`,
4. 🏷️ creates a signed commit and a `v<version>` tag, and pushes them,
5. 📄 creates a **draft** GitHub release `v<version>` with the built `dist/*.js` attached.

Nothing is published to npm (`"private": true`).

## 🟢 Publishing the draft

The release is created as a draft on purpose, so you can check it first:

1. Open the [Releases](https://github.com/gander-tools/monkey-redmine-time-widget/releases) page and edit the draft.
2. Check the notes and that `monkey-redmine-time-widget.user.js` is attached.
3. Click **Publish release**.

The README links to `releases/latest`, so users get the new version only after the draft is published.

## 🔄 What users need to do

The userscript has no `@updateURL` / `@downloadURL`, so userscript managers do **not** update it automatically. Users have to download the new file from the release and open it again.

## 🧪 Dry run

To see what would happen without changing anything:

```sh
npm run release -- --dry-run
```
