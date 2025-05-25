//Reverse string using while loop
function reverseString(str) {
  let reversed = "";
  let i = str.length - 1;
  while (i >= 0) {
    reversed += str[i];
    i--;
  }
  return reversed;
}

console.log(reverseString("Hello World.")); // ".dlroW olleH"

//Reverse string using split, reverse and join
const str = "Hello World.";
const reversed = str.split("").reverse().join("");
console.log(reversed); // .dlroW olleH
