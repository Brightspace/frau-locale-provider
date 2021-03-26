# frau-locale-provider

[![NPM version](https://img.shields.io/npm/v/frau-locale-provider.svg)](https://www.npmjs.org/package/frau-locale-provider)
[![NPM downloads](https://img.shields.io/npm/dt/frau-locale-provider.svg)](https://www.npmjs.com/package/frau-locale-provider)

frau-locale-provider is a utility that you can use in your D2L free range
applications ([frau](https://www.npmjs.com/browse/keyword/frau)) in order to get information about the locale of the current user.

To install via [NPM](https://www.npmjs.com/):

`npm install frau-locale-provider`

## API

### getLangTag()

Gets the current user's language tag, as defined in [RFC 5646](https://www.ietf.org/rfc/rfc5646.txt).
This consists of a primary language subtag (e.g. "en", "fr") and an optional region subtag, separated by a hyphen (e.g. "en-US", "fr-CA").

```javascript
var localeProvider = require('frau-locale-provider');

var langTag = localeProvider.getLangTag();
console.log(langTag); // -> e.g. "en-GB"
```

### isRtl()

Used to determine if the current user's locale requires that text be written in the [right to left (RTL)](http://en.wikipedia.org/wiki/Right-to-left)
direction.

```javascript
var localeProvider = require('frau-locale-provider');

var isRtl = localeProvider.isRtl();
console.log(isRtl); // -> true or false
```

## Contributing
Contributions are welcome, please submit a pull request!

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `master`. Read on for more details...

The [sematic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/master/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

### Version Changes

All version changes should obey [semantic versioning](https://semver.org/) rules:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

The next version number will be determined from the commit messages since the previous release. Our semantic-release configuration uses the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) when analyzing commits:
* Commits which are prefixed with `fix:` or `perf:` will trigger a `patch` release. Example: `fix: validate input before using`
* Commits which are prefixed with `feat:` will trigger a `minor` release. Example: `feat: add toggle() method`
* To trigger a MAJOR release, include `BREAKING CHANGE:` with a space or two newlines in the footer of the commit message
* Other suggested prefixes which will **NOT** trigger a release: `build:`, `ci:`, `docs:`, `style:`, `refactor:` and `test:`. Example: `docs: adding README for new component`

To revert a change, add the `revert:` prefix to the original commit message. This will cause the reverted change to be omitted from the release notes. Example: `revert: fix: validate input before using`.

### Releases

When a release is triggered, it will:
* Update the version in `package.json`
* Tag the commit
* Create a GitHub release (including release notes)
* Deploy a new package to NPM

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)
