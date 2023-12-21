//wap for rotation of n times

let d = 4;
let arr = [1, 2, 3, 4, 5];
let n = arr.length;

d = d % n;

let rotatedPart = arr.slice(0, d);
let remainingPart = arr.slice(d);

let rotatedArr = remainingPart.concat(rotatedPart);

console.log(rotatedArr);
