let arr = [1, 4, 4, 4, 5, 3];
let typeArr = Array.from(new Set(arr));
let result = typeArr[0],
  max = 0;
for (let y of typeArr) {
  let count = arr.filter((x) => {
    return x === y;
  }).length;
  if (count > max) {
    result = y;
    max = count;
  }
}

console.log(result);
