const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];
let n = 2;
let sequenceArr = new Array(n).fill().map(() => []);
let lastAnswer = 0;
let result = [];

for (let i = 0; i < queries.length; i++) {
  const [queryType, x, y] = queries[i];

  if (queryType === 1) {
    let index = (x ^ lastAnswer) % n;
    sequenceArr[index].push(y);
  } else if (queryType === 2) {
    let index = (x ^ lastAnswer) % n;
    let size = sequenceArr[index].length;
    lastAnswer = sequenceArr[index][y % size];
    result.push(lastAnswer);
  }
}
console.log(result);
