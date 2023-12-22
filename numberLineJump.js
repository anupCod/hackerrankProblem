let x1 = 0,
  v1 = 3,
  x2 = 4,
  v2 = 2;
let result;
if (v1 === v2) {
  result = x1 === x2 ? "YES" : "NO";
}
const jump = (x2 - x1) / (v1 - v2);

result = jump >= 0 && Number.isInteger(jump) ? "YES" : "NO";

console.log(result);
