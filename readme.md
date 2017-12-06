# is-jxa [![Build Status](https://travis-ci.org/sindresorhus/is-jxa.svg?branch=master)](https://travis-ci.org/sindresorhus/is-jxa)

> Check if your code is running in a [JXA](https://github.com/JXA-Cookbook/JXA-Cookbook) environment

*JXA is JavaScript for Automation on macOS.*


## Install

```
$ npm install is-jxa
```


## Usage

```js
const isJxa = require('is-jxa');

if (isJxa) {
	// For example, polyfill something here when it's in a JXA environment
}
```


## Related

- [run-jxa](https://github.com/sindresorhus/run-jxa) - Run JXA code and get the result


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
