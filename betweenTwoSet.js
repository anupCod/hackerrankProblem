const arr1 = [2, 4];
const arr2 = [16, 32, 96];

let minElement = Math.min(...arr2);
let maxElement = Math.max(...arr1);
let count = 0;

for (let i = maxElement; i <= minElement; i++) {
  let isFactorOfArr1 = arr1.every((element) => i % element === 0);
  let isFactorOfArr2 = arr2.every((element) => element % i === 0);

  if (isFactorOfArr1 && isFactorOfArr2) {
    count++;
  }
}

console.log(count);
