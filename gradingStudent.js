let gradeArray = [73, 67, 38, 33];

for (let i = 0; i < gradeArray.length; i++) {
  if (gradeArray[i] >= 38) {
    let roundedTerm = Math.ceil(gradeArray[i] / 5) * 5;
    let difference = roundedTerm - gradeArray[i];

    if (difference < 3) {
      gradeArray[i] = roundedTerm;
    }
  }
}

console.log(gradeArray);
