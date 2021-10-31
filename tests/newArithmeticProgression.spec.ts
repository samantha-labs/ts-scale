import { newArithmeticProgression } from '../src';

describe("newArithmeticProgression", () => {
	test("returns empty array if length is 0", () => {
		expect(newArithmeticProgression(4, 0, 1)).toStrictEqual([]);
	});

	test("fills an array of n length if step is 0", () => {
		expect(newArithmeticProgression(5, 5, 0)).toStrictEqual([5, 5, 5, 5, 5]);
	});

	test("computed correctly", () => {
		expect(newArithmeticProgression(1, 10, 2)).toStrictEqual([1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
	});
})
