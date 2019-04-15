import test from 'ava';
import execa from 'execa';
import resolveGlobal from '.';

test('npm', async t => {
	t.throws(() => {
		resolveGlobal('.');
	});

	t.throws(() => {
		resolveGlobal('cat-names');
	});

	t.regex(resolveGlobal('npm'), /npm/);

	await execa('npm', ['install', '--global', 'cat-names']);
	t.regex(resolveGlobal('cat-names'), /cat-names/);
	await execa('npm', ['uninstall', '--global', 'cat-names']);
});

test('yarn', async t => {
	await execa('npm', ['install', '--global', 'yarn']);

	await execa('yarn', ['global', 'add', 'dog-names']);
	t.regex(resolveGlobal('dog-names'), /dog-names/);
	await execa('yarn', ['global', 'remove', 'dog-names']);
});

test('.silent()', t => {
	t.is(resolveGlobal.silent('.'), undefined);
});
