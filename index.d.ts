/**
Check if your code is running in a [JXA](https://github.com/JXA-Cookbook/JXA-Cookbook) environment.

@example
```
import isJxa = require('is-jxa');

if (isJxa) {
	// For example, polyfill something here when it's in a JXA environment
}
```
*/
declare const isJxa: boolean;

export = isJxa;
