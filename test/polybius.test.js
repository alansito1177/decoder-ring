const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius", () =>{
    it("Should return a scrambled message with Each letter being a two digit number", () =>{
        const actual = polybius("The quick brown fox jumps over a lazy dog", true)

        const expected = "443251 1454423152 2124432533 124335 4254235334 43155124 11 13115545 414322";

        expect(actual).to.equal(expected);
    })
    it("should return a decoded message if given numbers with the correct restrictions", () =>{
        const actual = polybius("443251 1454423152 2124432533 124335 4254235334 43155124 11 13115545 414322", false);
        const expected = "the qu(i/j)ck brown fox (i/j)umps over a lazy dog";

        expect(actual).to.equal(expected);
    })
})