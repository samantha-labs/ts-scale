import { isGeometricProgression } from '../src';

test('isGeometricProgression detects correctly', () => {
	expect(() => isGeometricProgression([])).toThrow(RangeError);
	expect(isGeometricProgression([1, 3, 9, 27, 81, 243])).toStrictEqual([true, 3]);
	expect(isGeometricProgression([1, 3, 9, 27, 96])).toStrictEqual([false, NaN]);
});
