import fs from 'fs';
import test from 'ava';
import execa from 'execa';
import isJxa from '.';

test('returns false on Node.js', t => {
	t.false(isJxa);
});

test('return true on JXA', async t => {
	const script = `
		const module = {};
		${fs.readFileSync('index.js', 'utf8')}
		console.log(module.exports);
	`;

	const result = await execa.stderr('osascript', ['-l', 'JavaScript', '-e', script]);

	t.is(result, 'true');
});
