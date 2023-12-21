const strArr = ["ab", "ab", "abc"];
const queries = ["ab", "abc", "de"];

let result = [];

let count;

for (let i = 0; i < queries.length; i++) {
  count = 0;
  for (let j = 0; j < strArr.length; j++) {
    if (strArr[j] === queries[i]) {
      count++;
    }
  }
  result.push(count);
}

console.log(result);
