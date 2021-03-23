// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(shift === 0){return false}
    if (shift > 25 || shift < -25) {
      return false;
    }
    let secret = "";
    // your solution code here
    for (let letter of input) {
      let character = letter.toLowerCase();
      let symbol = character.charCodeAt(0);
      if (character.charCodeAt(0) > 96 && character.charCodeAt(0) < 123) {
        if ((encode === true)) {
          symbol += shift;
          if (symbol > 122) {
            symbol -= 26;
          }
          if(symbol < 97){
            symbol += 26;
          }
        }
        if ((encode === false)) {
          symbol -= shift;
          if (symbol < 97) {
            symbol += 26;
          }
          if (symbol > 122) {
            symbol -= 26;
          }
        }

        secret += String.fromCharCode(symbol);
      } else {
        secret += String.fromCharCode(symbol);
      }
    }
    return secret;
  }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
