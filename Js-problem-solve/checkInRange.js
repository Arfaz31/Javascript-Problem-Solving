function checkInRange(num, lowerLimit, upperLimit) {
  let isNum = 0;
  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (num === i) {
      isNum = 1;
      break;
    }
  }
  if (isNum === 1) {
    return "Yes";
  } else {
    return "No";
  }
}

console.log(checkInRange(5, 1, 10));
