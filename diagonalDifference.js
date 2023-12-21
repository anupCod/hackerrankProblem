let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
let principalDiagonalSum = 0,
  nextDiagonalSum = 0;
for (let i = 0; i < arr.length; i++) {
  principalDiagonalSum += arr[i][i];
  nextDiagonalSum += arr[arr.length - 1 - i][i];
}
let diagonalDiff = Math.abs(principalDiagonalSum - nextDiagonalSum);
console.log(diagonalDiff);
