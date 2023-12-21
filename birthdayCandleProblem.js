/* 
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
 */

const candles = [3, 2, 1, 3];
let max = candles.sort((a, b) => {
  return b - a;
})[0];
const result = candles.filter((val) => val === max);
console.log(result.length);
