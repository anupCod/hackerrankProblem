//There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr , then print the maximum hourglass sum. The array will always be 6 *6 .

let arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

let maxSum = -Infinity;

for (let i = 0; i <= arr.length - 3; i++) {
  for (let j = 0; j <= arr.length - 3; j++) {
    let currentSum =
      arr[i][j] +
      arr[i][j + 1] +
      arr[i][j + 2] +
      arr[i + 1][j + 1] +
      arr[i + 2][j] +
      arr[i + 2][j + 1] +
      arr[i + 2][j + 2];

    maxSum = Math.max(maxSum, currentSum);
  }
}

console.log("The maximum Sum is ", maxSum);
