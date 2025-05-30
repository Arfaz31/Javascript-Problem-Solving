//solution-1
function findSmallestNumber(arr) {
  return Math.min(...arr); // No need to sort!
}
//Math.min() expects individual numbers, Math.min(...arr) spreads the array into individual arguments, like Math.min(4, 2, 8).

//solution-2
function findSmallestNumber(arr) {
  let sort_array = arr.sort((a, b) => a - b);
  return sort_array[0]; // Smallest will be at index 0
}
