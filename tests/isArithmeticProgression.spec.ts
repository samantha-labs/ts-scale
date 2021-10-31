import { isArithmeticProgression } from '../src';

test('isArithmeticProgression detects correctly', () => {
	expect(() => isArithmeticProgression([])).toThrow(RangeError);
	expect(isArithmeticProgression([1, 3, 5, 7, 10])).toStrictEqual([false, NaN]);
	expect(isArithmeticProgression([1, 3, 5, 7, 9])).toStrictEqual([true, 2]);
});
