let s = 2,
  t = 3,
  a = 1,
  b = 5;
const apples = [2];
const oranges = [-2];

const fruitsInRange = (Location, fruitsDistance) => {
  return fruitsDistance.filter(
    (elem) => Location + elem >= s && Location + elem <= t
  ).length;
};

const countApple = fruitsInRange(a, apples);
const countOrange = fruitsInRange(b, oranges);

console.log(countApple);
console.log(countOrange);
