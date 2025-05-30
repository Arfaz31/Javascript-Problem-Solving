function findMissingPositive(arr) {
  // Filter only positive numbers
  const positiveArr = arr.filter((num) => num > 0);

  // Sort the array
  positiveArr.sort((a, b) => a - b);

  let smallestMissing = 1;

  for (let num of positiveArr) {
    if (num === smallestMissing) {
      smallestMissing++;
    } else if (num > smallestMissing) {
      break;
    }
  }

  return smallestMissing;
}

findMissingPositive([7, 8, 9, 11, 12]);

// Filter: [7, 8, 9, 11, 12]

// Sort: [7, 8, 9, 11, 12]

// Start checking from 1 → not found → result is 1

findMissingPositive([1, 2, 0]);

// Filter: [1, 2]

// Sort: [1, 2]

// 1 exists → check 2 → exists → check 3 → not found → result is 3

findMissingPositive([3, 4, -1, 1]);

// Filter: [3, 4, 1]

// Sort: [1, 3, 4]

// Result: 2
