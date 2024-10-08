const factorial = require("../src/index");

// 테스트 그룹 만들기 describe(그룹 이름, 람다 함수)
describe("factorial function", () => {
  it("correctly computes factorial of a positive integer number", () => {
    // 테스트 케이스
    expect(factorial(3)).toEqual(6);
    expect(factorial(5)).toEqual(120);
    expect(factorial(4)).toEqual(24);
  });

  it("throws an error if a negative input is provided", () => {
    expect(() => {
      factorial(-1);
    }).toThrow("n must be a positive integer");
  });
});
