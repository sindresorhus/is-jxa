import fs from 'node:fs';
import test from 'ava';
import execa from 'execa';
import isJxa from './index.js';

test('returns false on Node.js', t => {
	t.false(isJxa);
});

// TODO: Enable when JXA supports ESM.
test.failing('return true on JXA', async t => {
	const script = `
		const module = {};
		${fs.readFileSync('index.js', 'utf8')}
		console.log(module.exports);
	`;

	const {stdout} = await execa('osascript', ['-l', 'JavaScript', '-e', script]);

	t.is(stdout, 'true');
});
