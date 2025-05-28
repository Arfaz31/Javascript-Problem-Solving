function checkPerfectSquare(num1, num2) {
  const sum = num1 + num2;
  const root = Math.sqrt(sum);
  return root % 1 === 0;
}

// function checkPerfectSquare(num1, num2) {
//   let sum = num1 + num2;
//   let isPerfectSquare = Number.isInteger(Math.sqrt(sum));

//   if (isPerfectSquare) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }

const num1 = 3;
const num2 = 4;
const result = checkPerfectSquare(num1, num2);
console.log(result);
