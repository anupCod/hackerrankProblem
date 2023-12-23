const array = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
let maxCount = 0,
  minCount = 0;
let maxValue = array[0],
  minValue = array[0];

let result = new Array();

for (let x of array) {
  if (x > maxValue) {
    maxCount++;
    maxValue = x;
  } else if (x < minValue) {
    minCount++;
    minValue = x;
  } else {
    continue;
  }
}

result.push(maxCount);
result.push(minCount);

console.log(result);
