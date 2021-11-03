import { EmptySum, EmptyProduct } from './consts';

/**
 * Computes the series of numbers given an inclusive lower
 * bound and inclusive upper bound.
 * - This method runs in linear time, or `O(n)`, where
 *   `n = upperBound - lowerBound`.
 * - If there are zero summands, it will return the empty
 *   sum (also known as the nullary sum and vacuous sum),
 *   which is equal to 0 per the additive identity.
 * - In mathematics, it is formally written using the Greek
 *   Capital Sigma (Σ) notation.

 * @param lowerBound - Lower bound of the summation
 * @param upperBound - Upper bound of the summation
 * @param lambda - A single-parameter function for mutating each number
 * @throws {@link RangeError} if the `lowerBound` is greater than the `upperBound`
 */
export function getSumFromBounds(
	lowerBound: number,
	upperBound: number,
	lambda: (n: number) => number = (n) => n
): number {
	if (lowerBound > upperBound) { throw new RangeError(); }
	if (lowerBound === upperBound) { return EmptySum; }

	let sum = EmptySum;
	for (let i = lowerBound; i <= upperBound; i++) {
		sum += lambda(i);
	}

	return sum;
}

/**
 * Computes the series of numbers given an array of numbers.
 * - This method runs in linear time, or `O(n)`, where `n`
 *   is equal to the length of the `summands` array.
 * - If there are zero summands, it will return the empty
 *   sum (also known as the nullary sum and vacuous sum),
 *   which is equal to 0 per the additive identity.
 * - In mathematics, it is formally written using the Greek
 *   Capital Sigma (Σ) notation.
 * @param summands - multiple terms in a summation
 * @param lambda - a single-parameter function for mutating each number
 */
export function getSumFromArray(
	summands: number[],
	lambda: (n: number) => number = (n) => n
): number {
	return summands.reduce((sum, n) => sum + lambda(n), EmptySum);
}

/**
 * Computes the product of factors given an inclusive lower
 * bound and inclusive upper bound.
 * - This method runs in linear time, or `O(n)`, where
 *   `n = upperBound - lowerBound`
 * - In mathematics, it is formally written using the Greek
 *   Capital Pi (Π) notation.
 * - If there are zero factors, it will return the empty product
 *   (also known as the nullary product and vacuous product),
 *   which is equal 1 per the multiplicative identity.
 * @param lowerBound - Lower bound of the product
 * @param upperBound - Upper bound of the product
 * @param lambda - A single-parameter function for mutating each number
 * @throws {@link RangeError} if the `lowerBound` is greater than the `upperBound`
 */
export function getProductFromBounds(
	lowerBound: number,
	upperBound: number,
	lambda: (n: number) => number = (n) => n
): number {
	if (lowerBound > upperBound) { throw new RangeError(); }
	if (lowerBound === upperBound) { return EmptyProduct; }

	let product = EmptyProduct;
	for (let i = lowerBound; i <= upperBound; i++) {
		product *= lambda(i);
	}
	return product;
}

/**
 * Computes the product of factors given an array of factors.
 * - This method runs in linear time, or `O(n)`, where `n`
 *   is equal to the length of the `factors` array.
 * - In mathematics, it is formally written using the Greek
 *   Capital Pi (Π) notation.
 * - If there are zero factors, it will return the empty product
 *   (also known as the nullary product and vacuous product),
 *   which is equal 1 per the multiplicative identity.
 * @param factors - An array of factors
 * @param lambda - A single-parameter function for mutating each number
 */
export function getProductFromArray(
	factors: number[],
	lambda: (n: number) => number = (n) => n
): number {
	return factors.reduce((product, n) => product * lambda(n), EmptyProduct);
}
