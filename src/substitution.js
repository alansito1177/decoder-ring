// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alph = "abcdefghijklmnopqrstuvwxyz";
  function substitution(input, alphabet, encode = true) {
    let secret = "";
    if(!alphabet)return false;
    if (!(alphabet.length === 26)) {
      return false;
    }
    let reducedAlphabet = "";
    for (let letter of alphabet) {
      for (let char of reducedAlphabet) {
        if (letter === char) {
          return false;
        }
      }
      reducedAlphabet += letter;
    }
    if (encode === false) {
      for (let char of input) {
        for (let letter in alphabet) {
          if (alphabet[letter] === char.toLowerCase()) {
            secret += alph[letter];
          }
        }
        if(char === " "){
          secret += " ";
        }
      }
      return secret;
    }
    if(encode === true){
      for (let char of input) {
        for (let letter in alph) {
          if (alph[letter] === char.toLowerCase()) {
            secret += alphabet[letter];
          }
        }
        if(char === " "){
          secret += " ";
        }
      }
      return secret
    }

    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
