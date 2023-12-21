/* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time. */

let s = "12:01:00AM";
let size = s.length;
let amPm = s.slice(size - 2);
let timeArr = s.slice(0, size - 2).split(":");

if (amPm === "PM" && timeArr[0] !== "12") {
  timeArr[0] = (parseInt(timeArr[0]) + 12).toString();
}
if (amPm === "AM" && timeArr[0] === "12") {
  timeArr[0] = "00";
}

let result = timeArr.join(":");
console.log(result);
