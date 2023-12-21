let arr = [1, 3, 7, 5, 9];

arr.sort((a, b) => {
  return a - b;
});

let sum = arr.reduce((total, value) => {
  return total + value;
});

let result = new Array();

result[0] = sum - arr[arr.length - 1];
result[1] = sum - arr[0];

console.log(result);
