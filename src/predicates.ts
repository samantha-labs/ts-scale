import { ProgressionResult } from './types';

function isApproxEqual(a: number, b: number, epsilon: number = 0.001): boolean {
	return Math.abs(a - b) < epsilon;
}

/**
 * Checks if the difference between each term in a progression
 * is a constant. For example, the sequence `[1, 3, 5, 7, 9]`
 * has a constant difference of 2 between each term.
 *
 * @remarks
 *  - This method runs in linear time, or `O(n)`, where `n` is
 *    the length of the array. It runs in a single-pass.
 * @example
 * ```ts
 * isArithmeticProgression([1, 2, 3, 4, 5, 6]); // [true, 1]
 * isArithmeticProgression([2, 4, 6, 8, 10]); // [true, 2]
 * isArithmeticProgression([7, 14, 21, 28, 35]); // [true, 7]
 * isArithmeticProgression([1, 2, 3, 4, 5, 7]); // [false, NaN]
 * ```
 * @param sequence - - a sequence of numbers
 * @returns a 2-tuple containing:
 *  - a boolean indicating whether the sequence is an arithmetic progression
 *  - the common difference between each term in the sequence
 *    (`NaN` if the sequence is not an arithmetic progression)
 * @throws {@link RangeError} if the sequence has less than 2 numbers
 */
export function isArithmeticProgression(sequence: number[]): ProgressionResult {
	if(sequence.length < 2) { throw new RangeError(); }

	const consecutiveDiff = sequence[1] - sequence[0];
	for(let i = 2; i < sequence.length; i++) {
		if(sequence[i] - sequence[i - 1] !== consecutiveDiff) {
			return [false, NaN];
		}
	}

	return [true, consecutiveDiff];
}

/**
 * Given a sequence of non-zero numbers, checks if there is a common
 * ratio between each consecutive term by multiplying the previous
 * term by a non-zero number
 *
 * @remarks
 *  - This method runs in linear time, or `O(n)`, where `n` is
 *    the length of the array. It runs in a single-pass.
 * @example
 * ```ts
 * isGeometricProgression([2, 4, 8, 16, 32, 64]); // [true, 2]
 * isGeometricProgression([2, 12, 72, 432]); // [true, 6]
 * isGeometricProgression([2, 5, 12.5, 31.25]); // [true, 2.5]
 * isGeometricProgression([100, 50, 25, 12.5, 6.25, 3.125, 1.5625, 0.78125]); // [true, 1/2]
 * ```
 * @param sequence - - a sequence of positive numbers
 * @throws {@link RangeError} if the sequence only has 1 number
 */
export function isGeometricProgression(sequence: number[]): ProgressionResult {
	if(sequence.length < 2) { throw new RangeError(); }

	const consectuiveQuotient = sequence[1] / sequence[0];
	for(let i = 2; i < sequence.length; i++) {
		if (sequence[i] === 0 || sequence[i] / sequence[i - 1] !== consectuiveQuotient) {
			return [false, NaN];
		}
	}

	return [true, consectuiveQuotient];
}

/**
 * Given a sequence of numbers, checks if each term is the
 * harmonic mean of its previous term and next term.
 *
 * @remarks
 *  - This method runs in linear time, or `O(n)`, where `n` is
 *    the length of the array. It runs in a single-pass.
 * @example
 * ```
 * isHarmonicProgression([1, 1/2, 1/3, 1/4, 1/5]); // [true, 1]
 * ```
 * @param sequence - a sequence of numbers
 * @throws {@link RangeError} if the sequence has less than 2 numbers
 */
export function isHarmonicProgression(sequence: number[], epsilon: number = 0.001): ProgressionResult {
	const length = sequence.length;
	if (length < 2) { throw new RangeError(); }

	const reciprocals = [];
	for (let i = 0; i < length; i++) {
		reciprocals.push((1 / sequence[i]));
	}

	reciprocals.sort((a, b) => a - b);
	const consecutiveDiff = (reciprocals[1]) - (reciprocals[0]);
	for (let i = 2; i < length; i++) {
		if (!isApproxEqual(reciprocals[i] - reciprocals[i - 1], consecutiveDiff, epsilon)) {
			return [false, NaN];
		}
	}

	return [true, consecutiveDiff];
}
