function arrayManipulation(n, queries) {
  const arr = new Array(n + 1).fill(0);
  console.log(arr);
  let max = 0;
  let sum = 0;

  for (let i = 0; i < queries.length; i++) {
    const [a, b, k] = queries[i];
    arr[a - 1] += k;
    arr[b] -= k;
  }

  console.log(arr);

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    max = Math.max(max, sum);
  }

  return max;
}

// Example usage:
const n = 5;
const queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

const result = arrayManipulation(n, queries);
console.log(result);
