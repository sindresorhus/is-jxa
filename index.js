/* eslint-disable no-undef */

const isJxa = (() => {
	try {
		return typeof $ === 'function'
			&& typeof Application === 'function'
			&& typeof Application.currentApplication === 'function'
			&& typeof ObjC === 'object'
			&& typeof ObjC.import === 'function';
	} catch {
		return false;
	}
})();

export default isJxa;
