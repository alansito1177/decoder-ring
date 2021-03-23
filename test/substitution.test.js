// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("Substitution", () => {
  it("Should return false if there is an alphabet letter repeat", () => {
    const actual = substitution("gamer", "qwertyuiopasdfghjklzcvbnmz", true);

    expect(actual).to.equal(false);
  });
  it("Should decode a scrambled phrase", () => {
    const actual = substitution("uqdtk", "qwertyuiopasdfghjklzxcvbnm", false);
    const expected = "gamer";
    expect(actual).to.equal(expected);
  });
  it("Should decode a scrambled phrase", () => {
    const actual = substitution("gamer", "qwertyuiopasdfghjklzxcvbnm", true);
    const expected = "uqdtk";
    expect(actual).to.equal(expected);
  });
});
