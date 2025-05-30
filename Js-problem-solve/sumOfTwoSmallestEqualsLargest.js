function sumOfTwoSmallestEqualsLargest(num1, num2, num3) {
  // Step 1: Put numbers into an array
  const nums = [num1, num2, num3];

  // Step 2: Sort the array in ascending order
  nums.sort((a, b) => a - b); // now: [smallest, middle, largest]

  // Step 3: Check if the sum of the two smallest equals the largest
  return nums[0] + nums[1] === nums[2];
}

sumOfTwoSmallestEqualsLargest(8, 5, 3); // true → 3 + 5 = 8
sumOfTwoSmallestEqualsLargest(10, 4, 6); // true → 4 + 6 = 10
sumOfTwoSmallestEqualsLargest(7, 2, 5); // false → 2 + 5 ≠ 7
