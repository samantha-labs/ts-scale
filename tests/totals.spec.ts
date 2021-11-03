import { getProductFromArray, getProductFromBounds, getSumFromArray, getSumFromBounds } from '../src';
describe('series', () => {
	describe('from array', () => {
		test('generates correctly', () => {
			expect(getSumFromArray([1, 2, 3, 4, 5], (n) => 2 * n)).toBe(30);
		});

		test('generates correctly with default lambda', () => {
			expect(getSumFromArray([1, 2, 3, 4, 5])).toBe(15);
		});
		
		test('returns empty sum if array is empty', () => {
			expect(getSumFromArray([])).toBe(0);
		});
	});

	describe('from bounds', () => {
		test('generates correctly', () => {
			expect(getSumFromBounds(1, 5, (n) => 2 * n)).toBe(30);
		});

		test('generates correctly with default lambda', () => {
			expect(getSumFromBounds(1, 5)).toBe(15);
		});

		test('throws error if lower bound is greater than upper bound', () => {
			expect(() => getSumFromBounds(5, 1)).toThrow(RangeError);
		});

		test('returns empty sum if bounds are equal to each other', () => {
			expect((getSumFromBounds(5, 5))).toBe(0);
		})
	});
});

describe('product', () => {
	describe('from array', () => {
		test('generates correctly', () => {
			expect(getProductFromArray([1, 2, 3, 4, 5], (n) => 2 * n)).toBe(3840);
		});

		test('generates correctly with default lambda', () => {
			expect(getProductFromArray([1, 2, 3, 4, 5])).toBe(120);
		})

		test('returns empty product if array is empty', () => {
			expect(getProductFromArray([])).toBe(1);
		});
	});

	describe('from bounds', () => {
		describe('generates correctly', () => {
			expect(getProductFromBounds(1, 5, (n) => 2 * n)).toBe(3840);
		});

		describe('generates correctly with default lambda', () => {
			expect(getProductFromBounds(1, 5)).toBe(120);
		})

		test('throws error if lower bound is greater than upper bound', () => {
			expect(() => getProductFromBounds(5, 1)).toThrow(RangeError);
		});

		test('returns empty product if bounds are equal to each other', () => {
			expect((getProductFromBounds(5, 5))).toBe(1);
		})
	});
});
