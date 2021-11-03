export type ProgressionGenerator = (base: number, length: number, scale: number) => number[];
export type ProgressionResult = [boolean, number];
export type ProgressionPredicate = (sequence: number[]) => ProgressionResult;
export type ProgressionType = 'arithmetic' | 'geometric' | 'harmonic';
export type SumProductGeneratorFromBounds = (lowerBound: number, upperBound: number, lambda: (n: number) => number) => number;
export type SumProductGeneratorFromArray = (sequence: number[], lambda: (n: number) => number) => number;
