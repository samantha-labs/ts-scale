# `@neoncitylights/scale`
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![npm (scoped)](https://img.shields.io/npm/v/@neoncitylights/scale)
[![codecov](https://codecov.io/gh/samantha-labs/ts-scale/branch/main/graph/badge.svg?token=c7KOrPxoIb)](https://codecov.io/gh/samantha-labs/ts-scale)
[![Node.js workflow](https://github.com/samantha-labs/ts-scale/actions/workflows/ci.yml/badge.svg)](https://github.com/samantha-labs/ts-scale/actions/workflows/ci.yml)
[![GitHub Pages Docs](https://img.shields.io/badge/gh--pages--docs-running-brightgreen)](https://samantha-labs.github.io/ts-scale/)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsamantha-labs%2Fts-scale.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsamantha-labs%2Fts-scale?ref=badge_shield)

A mathematical library in TypeScript for working with progressions - sequences of numbers that convey a certain pattern.

## Install
```bash
npm install @neoncitylights/scale
```

## Documentation
[Auto-generated API documentation is available](https://samantha-labs.github.io/ts-scale/).

There are 3 types of a progression in math:
  - **Arithmetic progression**: A sequence of numbers where the consecutive difference between each term is a constant.[^arith-wolfram][^arithm-wiki] E.g., an arithmetic progression of 5 numbers, with 2 as the common difference, starting at 1:
    ```ts
    [1, 3, 5, 7, 9]
    ```
  - **Geometric progression**: A sequence of numbers where there is a common ratio between each term.[^geo-wolfram][^geo-wiki] That ratio is found by multiplying the previous term by a non-zero number.  E.g., a geometric progression of 6 numbers, with 2 as the common ratio, starting at 5:
    ```ts
    [5, 10, 20, 40, 80, 160]
    ```
  - **Harmonic progression**: A sequence of numbers where each term is the harmonic mean of its previous term and next term.[^harmonic-wiki] E.g., a harmonic progression of 6 numbers, with 2 as the scaling value, starting at 1:
    ```ts
    [1, 1/2, 1/3, 1/4, 1/5, 1/6]
    ```
### API
#### Generators
 * <a href="#newArithmeticProgression">#</a> generators.**newArithmeticProgression**(*startNumber*, *length*, *step*): *number[]* ??? [source](./src/generators.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#newArithmeticProgression)
 * <a href="#newGeometricProgression">#</a> generators.**newGeometricProgression**(*startNumber*, *length*, *scale*): *number[]* ??? [source](./src/generators.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#newGeometricProgression)
 * <a href="#newHarmonicProgression">#</a> generators.**newHarmonicProgression**(*startNumber*, *length*, *scale*): *number[]* ??? [source](./src/generators.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#newHarmonicProgression)
#### Predicates
 * <a href="#isArithmeticProgression">#</a> predicates.**isArithmeticProgression**(*numbers*): *ProgressionResult* ??? [source](./src/predicates.ts), [docs](https://samantha-labs.io/ts-scale/modules.html#isArithmeticProgression)
 * <a href="#isGeometricProgression">#</a> predicates.**isGeometricProgression**(*numbers*): *ProgressionResult* ??? [source](./src/predicates.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#isGeometricProgression)
 * <a href="#isHarmonicProgression">#</a> predicates.**isHarmonicProgression**(*numbers*): *ProgressionResult* ??? [source](./src/predicates.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#isHarmonicProgression)

#### Totals (sums and products)
 * <a href="#getProductFromArray">#</a> total.**getProductFromArray**(*factors*, *lambda*): number ??? [source](./src/total.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#getProductFromArray)
 * <a href="#getProductFromBounds">#</a> total.**getProductFromBounds**(*lower*, *upper*, *lambda*): number ??? [source](./src/total.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#getProductFromBounds)
 * <a href="#getSumFromArray">#</a> total.**getSumFromArray**(*summands*, *lambda*): number ??? [source](./src/total.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#getSumFromArray)
 * <a href="#getSumFromBounds">#</a> total.**getSumFromBounds**(*lower*, *upper*, *lambda*): number ??? [source](./src/total.ts), [docs](https://samantha-labs.github.io/ts-scale/modules.html#getSumFromBounds)
#### Constants
There are constants for certain music intervals that can be used coincide with the generator functions.

* <a href="#minorSecond">#</a> MinorSecond
* <a href="#majorSecond">#</a> MajorSecond
* <a href="#minorThird">#</a> MinorThird
* <a href="#majorThird">#</a> MajorThird
* <a href="#perfectThird">#</a> PerfectThird
* <a href="#augmentedFourth">#</a> AugmentedFourth
* <a href="#perfectFifth">#</a> PerfectFifth
* <a href="#goldenRatio">#</a> GoldenRatio
* <a href="#majorSixth">#</a> MajorSixth
* <a href="#majorSeventh">#</a> MajorSeventh
* <a href="#emptySum">#</a> EmptySum
* <a href="#emptyProduct">#</a> EmptyProduct

## Examples
### Convergent series
Given a length of an arbitrarily large number, we can prove, model, and visualize convergent series; that is, the sum of an infinite sequence resulting in a finite number.

We can use `newArithmeticProgression` to find the sequence of summands, and `getSumFromArray()` for passing in the summands for the sum; we can also only use `getSumFromBounds()` to find the sum.

For example:
```ts
const ARBITRARILY_LARGE_LIMIT = 500;
getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => (Math.pow(-1, n+1)/Math.pow(2, n)));
// absolute alternating convergence
// 1/2 ??? 1/4 + 1/8 ??? 1/16 + ??? = 0.3333333333333333 (1/3)

getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => (1/Math.pow(4,n)));
// 1/4 + 1/16 + 1/64 + 1/256 + ??? = 0.3333333333333333 (1/3)

getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => Math.pow(1/2, n));
// 1/2 + 1/4 + 1/8 + 1/16 + ??? = 1

getSumFromBounds(1, ARBITRARILY_LARGE_LIMIT, (n) => 1/(n * (n-1)));
// 1/2 + 1/4 + 1/6 + 1/12 + 1/20 + 1/30 + ??? = 0

const riemannZeta = (s: number, limit: ABSOLUTELY_LARGE_LIMIT) => {
  getSumFromBounds(1, n, (n) => 1/(n ** s));
}
```

### Typographic scales
This library can be used to generate a typography scale for web projects.

For example, to generate a scale on a major second where the base font size is `16px`:
```ts
newGeometricProgression(16, 6, MajorSecond).map(n => `${n.toFixed(3)}px`);
// ["16.000px", "18.000px", "20.250px", "22.781px", "25.629px", "28.833px"]
```

These floating points aren't easy to remember, so we have the option to modify this scale by rounding each value:
```ts
newGeometricProgression(16, 6, MajorSecond).map(n => `${Math.round(n)}px`);
// ["16px", "18px", "20px", "23px", "26px", "29px"]
```

## License
This library is licensed under the [MIT License](./LICENSE).

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsamantha-labs%2Fts-scale.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsamantha-labs%2Fts-scale?ref=badge_large)

[^arith-wolfram]: Weisstein, Eric W. "Arithmetic Progression." From MathWorld--A Wolfram Web Resource. https://mathworld.wolfram.com/ArithmeticProgression.html 
[^geo-wolfram]:  Weisstein, Eric W. "Geometric Sequence." From MathWorld--A Wolfram Web Resource. https://mathworld.wolfram.com/GeometricSequence.html 
[^arithm-wiki]: Wikipedia contributors. (2021, October 22). Arithmetic progression. In Wikipedia, The Free Encyclopedia. Retrieved 21:13, October 30, 2021, from https://en.wikipedia.org/w/index.php?title=Arithmetic_progression&oldid=1051249503
[^geo-wiki]: Wikipedia contributors. (2021, September 9). Geometric progression. In Wikipedia, The Free Encyclopedia. Retrieved 21:11, October 30, 2021, from https://en.wikipedia.org/w/index.php?title=Geometric_progression&oldid=1043380314
[^harmonic-wiki]: Wikipedia contributors. (2021, April 28). Harmonic progression (mathematics). In Wikipedia, The Free Encyclopedia. Retrieved 21:14, October 30, 2021, from https://en.wikipedia.org/w/index.php?title=Harmonic_progression_(mathematics)&oldid=1020361383
