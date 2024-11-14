/**
 * And I would almost recommend any time that you want to use tuples, you probably actually need read-only
 * tuples because they prevent weirdnesses like this from occurring. And actually, when I've asked about
 * this on Twitter and spoken to people in the community, they say, yeah, I basically only use read-only
 * tuples. I never use the other kind because it just prevents dangerous situations like this one.
 */
type Coordinate = readonly [number, number];
const myHouse: Coordinate = [0, 0];

const dangerousFunction = (arrayOfNumbers: number[]) => {
  arrayOfNumbers.pop();
  arrayOfNumbers.pop();
};

dangerousFunction(
  // @ts-expect-error
  myHouse
);
