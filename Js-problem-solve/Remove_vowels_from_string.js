function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  return str
    .split("")
    .filter((char) => !vowels.includes(char))
    .join("");
}

console.log(removeVowels("Hello World"));
