function sortStringList(strList) {
  return strList.sort((a, b) => a.length - b.length);
}

const strings = ["banana", "apple", "kiwi", "orange"];
const sorted = sortStringList(strings);
console.log(sorted);

//.sort() compares pairs of items.

//a.length - b.length:

//    If the result is negative → a comes before b

//    If positive → b comes before a

//   If 0 → order stays the same

function sortStringList(strList) {
  for (let i = 0; i < strList.length; i++) {
    for (let j = 0; j < strList.length - 1; j++) {
      if (strList[j].length > strList[j + 1].length) {
        // Swap
        let temp = strList[j];
        strList[j] = strList[j + 1];
        strList[j + 1] = temp;
      }
    }
  }
  return strList;
}

console.log(sortStringList(["pear", "fig", "banana", "kiwi"]));
