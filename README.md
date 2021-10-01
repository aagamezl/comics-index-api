# comic-index-api

GraphQL API to manage Comic and Manga books.

# Instalation

## commitlint

* `npm i -D @commitlint/{cli,config-conventional}`
* `echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`

## Husky

* `npx husky-init && npm install`
* `npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'`

## standard-version
* `npm i -D standard-version`

Add an npm run script to your package.json:

```json
{
  "scripts": {
    "release": "standard-version"
  }
}
```

## First Release
To generate your changelog for your first release, simply do:

```bash
# npm run script
npm run release -- --first-release
```

## Cutting Releases

If you typically use npm version to cut a new release, do this instead:

```bash
# npm run script
npm run release
```