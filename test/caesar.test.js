// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar", () => {
  it("Should return a scrambled messages if number is less than 25", () => {
    const actual = caesar("This is a secret message!", 8, true);

    const expected = "bpqa qa i amkzmb umaaiom!";

    expect(actual).to.equal(expected);
  });
  it("Should return a scrambled messages if number is less than 0", () => {
    const actual = caesar("This is a secret message!", -5, true);

    const expected = "ocdn dn v nzxmzo hznnvbz!";

    expect(actual).to.equal(expected);
  });
  it("Should return a secret messages if number is less than 0", () => {
    const actual = caesar("ocdn dn v nzxmzo hznnvbz!", -5, false);

    const expected = "this is a secret message!";

    expect(actual).to.equal(expected);
  });
});
