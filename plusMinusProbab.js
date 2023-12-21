//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

let arr = [1, 1, 0, -1, -1];
let resultArr = new Array();
let negCount = 0,
  posCount = 0,
  zeroCount = 0;

for (let x of arr) {
  if (x === 0) {
    zeroCount++;
  } else if (x > 0) {
    posCount++;
  } else {
    negCount++;
  }
}

resultArr[0] = parseFloat((posCount / arr.length).toPrecision(6));
resultArr[1] = parseFloat((negCount / arr.length).toPrecision(6));
resultArr[2] = parseFloat((zeroCount / arr.length).toPrecision(6));

console.log(resultArr);
