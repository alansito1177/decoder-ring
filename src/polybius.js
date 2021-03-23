// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alph = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "(i/j)",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const numbers = [1, 2, 3, 4, 5];
  function polybius(input, encode = true) {
    // your solution code here
    if (encode === true) {
      let secret = "";
      for (let letter of input) {
        let num = "";
        for (let char in alph) {
          if (letter.toLowerCase() === alph[char]) {
            num += (char % 5) + 1;
            num += Math.floor(char / 5) + 1;
            secret += num;
          }
        }
        if (letter === " ") {
          num += " ";
          secret += num;
        }
        if (letter === "i" || letter === "j") {
          num += 42;
          secret += num;
        }
      }
      return secret;
    }
    if (encode === false) {
      let count = 0;
      for (let int of input) {
        console.log(int, !(int === " "));
        if (!(int === " ")) {
          count++;
        }
      }
      console.log(count)
      if (!(count % 2 == 0)){
        return false;
      }
      let secret = "";
      let nums = "";
      for (let num of input + 1) {
        if ((!num === " " && num < 1) || num > 5) {
          return "input for decoding must only use numbers greater than 0, numbers less than 6, and spaces.";
        }
        if (nums.length === 2) {
          for (let char in alph) {
            if (nums == `${(char % 5) + 1}${Math.floor(char / 5) + 1}`) {
              secret += alph[char];
            }
          }
          nums = "";
        }
        for (let nb of numbers) {
          if (num == nb) {
            nums += num;
          }
        }
        if (num === " ") {
          secret += " ";
        }
      }
      return secret;
    }
  }

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
