function stutter(word) {
  const prefix = word.split(" ")[0].slice(0, 2);
  return `${prefix}... ${prefix}... ${word}`;
}

// function stutter(word) {
//     let first_word = word.split(' ')[0]; // Get first word
//     let letters = first_word.slice(0, 2); // Get first 2 letters
//     let stutter_effect = letters + "..." + " " + letters + "..." + " " + word;
//     return stutter_effect;
// }

// console.log(stutter("coca cola")); // Should output "co... co... coca cola"

console.log(stutter("incredible"));
