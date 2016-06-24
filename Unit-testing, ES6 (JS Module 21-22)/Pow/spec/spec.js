var pow = require('../script.js')

describe("Pow", function() {
  it("positivePow", function() {
    expect(pow(2, 3)).toBe(8);
  });
});

describe("Pow", function() {
  it("negativePow", function() {
    expect(pow(-3, 2)).toBe(9);
  });
});

describe("Pow", function() {
  it("ifZero", function() {
    expect(pow(99, 0)).toEqual(1);
  });
});