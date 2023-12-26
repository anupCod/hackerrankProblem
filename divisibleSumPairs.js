let ar = [1, 3, 2, 6, 1, 2];
const n = ar.length;
let k = 3;
let count = 0;
ar.sort((a, b) => {
  return a - b;
});

for (let i = 0; i < n - 1; i++) {
  for (let j = i + 1; j < n; j++) {
    if ((ar[i] + ar[j]) % k === 0) {
      count++;
    }
  }
}

console.log(count);
