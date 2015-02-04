# frau-locale-provider
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Coverage Status][coverage-image]][coverage-url]

frau-locale-provider is a utility that you can use in your D2L free range
applications ([frau](https://www.npmjs.com/browse/keyword/frau)) in order to get information about the locale of the current user.

To install via [NPM](https://www.npmjs.com/):

`npm install frau-locale-provider`

##API

###getLangCode()

Gets the current user's language code, as a [RFC 3066](https://www.ietf.org/rfc/rfc3066.txt) value. e.g. "en", "en-US", "fr-CA".

```javascript
var localeProvider = require('frau-locale-provider');

var langCode = localeProvider.getLangCode();
console.log(langCode); // -> e.g. "en-GB"
```

###isRtl()

Used to determine if the current user's locale requires that text be written
in the [right to left (RTL)](http://en.wikipedia.org/wiki/Right-to-left)
direction.

```javascript
var localeProvider = require('frau-locale-provider');

var isRtl = localeProvider.isRtl();
console.log(isRtl); // -> true or false
```

[npm-url]: https://npmjs.org/package/frau-locale-provider
[npm-image]: https://img.shields.io/npm/v/frau-locale-provider.svg
[ci-image]: https://img.shields.io/travis/Brightspace/frau-locale-provider/master.svg
[ci-url]: https://travis-ci.org/Brightspace/frau-locale-provider
[coverage-image]: https://img.shields.io/coveralls/Brightspace/frau-locale-provider/master.svg
[coverage-url]: https://coveralls.io/r/Brightspace/frau-locale-provider?branch=master
