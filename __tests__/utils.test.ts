import { getISOLangCode } from '../src/utils/utils';

test('Gives correct ISO code for es', () => {
	expect(getISOLangCode('es')).toBe('es-ES');
});

test('Gives correct ISO code for en', () => {
	expect(getISOLangCode('en')).toBe('en-GB');
});

test('Gives correct ISO code for anything eslse', () => {
	expect(getISOLangCode('br')).toBe('en-GB');
});
