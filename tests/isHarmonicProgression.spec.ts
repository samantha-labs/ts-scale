import { isHarmonicProgression } from '../src';

test('isHarmonicProgression detects correctly', () => {
	expect(() => isHarmonicProgression([])).toThrow(RangeError);
	expect(isHarmonicProgression([1, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6])).toStrictEqual([true, 1]);
	expect(isHarmonicProgression([1, 1 / 2, 1 / 3, 1 / 4, 1 / 7])).toStrictEqual([false, NaN]);
})
