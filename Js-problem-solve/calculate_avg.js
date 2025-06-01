function calculateAverage(arr) {
  const result = arr.reduce((acc, a) => acc + a, 0) / arr.length;
  return result;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
