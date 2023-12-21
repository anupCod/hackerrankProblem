//Reversing an array without an reverse function

const NumArr = [7, 9, 14, 4, 20];
let length = NumArr.length;
for (let i = length - 1; i >= 0; i--) {
  NumArr[2 * length - (i + 1)] = NumArr[i];
}
NumArr.splice(0, length);
console.log(NumArr);
