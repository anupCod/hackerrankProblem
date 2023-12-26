let s = [2, 2, 1, 3, 2];
let d = 6,
  m = 3;
let count = 0,
  sum;
for (let i = 0; i <= s.length - m; i++) {
  sum = 0;

  for (let j = i; j < i + m; j++) {
    sum += s[j];
  }
  if (sum === d) {
    count++;
  }
}

console.log(count);
