/**
 * Same thing is possible in types as well
 *
 * thing to be noted is specific proeprties should have values which are subtype
 *  of value of index type. like last value is not allowed
 */
interface Scores {
  [key: string]: number;
  math: number;
  english: number;
  science: number;
  //physics : sting
}

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
