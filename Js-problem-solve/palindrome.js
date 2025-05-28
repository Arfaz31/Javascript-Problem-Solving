function isPalindrome(str) {
  const reverse_str = str.split("").reverse().join("");
  if (str === reverse_str) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("racecar"));
