import { newGeometricProgression } from "../src";

describe("newGeometricProgression", () => {
	test("throws error if starting number is 0", () => {
		expect(() => newGeometricProgression(0, 5, 6)).toThrow(RangeError);
	});

	test("throws error if scale is 0", () => {
		expect(() => newGeometricProgression(5, 5, 0)).toThrow(RangeError);
	})

	test("returns empty array if length is 0", () => {
		expect(newGeometricProgression(1, 0, 2)).toStrictEqual([]);
	});

	test("generates correctly", () => {
		expect(newGeometricProgression(1, 11, 2)).toStrictEqual([1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]);
	});
});
