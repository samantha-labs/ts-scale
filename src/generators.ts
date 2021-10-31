/**
 * Generates a sequence where the difference between each consecutive
 * term is a constant.
 *
 * @remarks
 *  - This method runs in linear time, or `O(n)`,
 *    where `n` is the length of the sequence.
 * @example
 * ```ts
 * newArithmeticProgression(1, 10, 2);
 * // [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
 *
 * newArithmeticProgression(1, 5, 3);
 * // [1, 4, 7, 10, 13]
 * ```
 * @param startNumber - The first number in the progression
 * @param length - The length of the progression
 * @param step - The numeric step between each consecutive term
 */
export function newArithmeticProgression(startNumber: number, length: number, step: number): number[] {
	if (length === 0) { return []; }
	if( step === 0) { return Array(length).fill(startNumber); }

	const progression = [];
	for (let i = 0; i < length; i++) {
		progression.push(startNumber + step * i);
	}
	return progression;
}

/**
 * Generates a sequence of numbers that starts with a given number
 * and is multiplied by a given constant.
 *
 * @remarks
 *  - This method runs in linear time, or `O(n)`,
 *    where `n` is the length of the sequence.
 * @example
 * ```ts
 * newGeometricProgression(1, 11, 2)
 * // [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
 *
 * newGeometricProgression(1, 9, 3)
 * // [1, 5, 25, 125, 625, 3125, 15625, 78125, 390625] 
 * ```
 * @param startNumber - The first number in the progression
 * @param length - The length of the sequence to generate
 * @param scale - The scale to use, which will be multiplied by the base to the nth power
 * @throws {@link RangeError} if the base/scale is 0
 */
export function newGeometricProgression(startNumber: number, length: number, scale: number): number[] {
	if (length === 0) { return []; }
	if (startNumber === 0 || scale === 0) { throw new RangeError('base/scale must be greater than 0'); }

	const progression: number[] = [];	
	for(let i = 0; i < length; i++) {
		progression.push(startNumber * (scale ** i));
	}

	return progression;
}

/**
 * Generates a sequence in which each term is the harmonic mean of
 * its immediate neighbouring terms.
 *
 * @remarks
 *  - This method runs in linear time, or `O(n)`,
 *    where `n` is the length of the sequence.
 * @example
 * ```ts
 * getHarmonicProgression(1, 5, 1);
 * // [1, 0.5, 0.3333333333333333, 0.25, 0.2]
 *
 * getHarmonicProgression(1, 5, 2);
 * // [1, 0.3333333333333333, 0.2, 0.14285714285714285, 0.1111111111111111]
 * ```
 * @param startNumber - The first number in the progression
 * @param length - Amount of numbers in the sequence
 * @param scale - The scalar to produce the progression
 * @throws {@link RangeError} if the base/scale is 0
 */
export function newHarmonicProgression(startNumber: number, length: number, scale: number): number[] {
	if (length === 0) { return []; }
	if (startNumber === 0 || scale === 0) { throw new RangeError('base/scale must be greater than 0'); }

	const progression: number[] = [];
	for (let i = 0; i < length; i++) {
		progression.push(1 / (startNumber + i * scale));
	}
	return progression;
}
