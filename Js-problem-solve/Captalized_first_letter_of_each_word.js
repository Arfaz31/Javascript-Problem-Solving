function convertToTitleCase(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(convertToTitleCase("hello world"));

//This splits the sentence into words using the space " " as a separator. ["hello", "world", "from", "javascript"]
//word is a string, like "hello"
//charAt(0) means: Get the character at position 0 (the first letter)
//slice(1) means: Take the part of the word starting from index 1 to the end (so, everything after the first letter)
// const word = "HELLO";
// const restOfWord = word.slice(1); // "ELLO"

//join(" ") means: this puts them back together into one string, with a space between each word.
