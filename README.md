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

## Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.
