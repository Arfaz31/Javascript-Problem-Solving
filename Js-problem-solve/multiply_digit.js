function multiplyDigits(num) {
  let result = 1;

  while (num > 0) {
    let digit = num % 10;
    result *= digit;
    num = Math.floor(num / 10);
  }

  return result;
}

console.log(multiplyDigits(123));
