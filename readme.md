# is-jxa

> Check if your code is running in a [JXA](https://github.com/JXA-Cookbook/JXA-Cookbook) environment

*JXA is JavaScript for Automation on macOS.*

## Install

```sh
npm install is-jxa
```

## Usage

```js
import isJxa from 'is-jxa';

if (isJxa) {
	// For example, polyfill something here when it's in a JXA environment
}
```

*You need to transpile the code for an JXA environment as it does not support ESM.*

## Related

- [run-jxa](https://github.com/sindresorhus/run-jxa) - Run JXA code and get the result
