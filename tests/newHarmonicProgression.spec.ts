import { newHarmonicProgression } from "../src";

describe("newHarmonicProgression", () => {
	test("throws error if starting number is 0", () => {
		expect(() => newHarmonicProgression(0, 2, 7)).toThrow(RangeError);
	});

	test("throws error if scale is 0", () => {
		expect(() => newHarmonicProgression(3, 4, 0)).toThrow(RangeError);
	})

	test("returns empty array if length is 0", () => {
		expect(newHarmonicProgression(1, 0, 2)).toEqual([]);
	});

	test("generates correctly", () => {
		expect(newHarmonicProgression(1, 5, 1)).toStrictEqual([1, 1/2, 1/3, 1/4, 1/5]);
	});
});
