const { MyObj1, makeObj2, makeObj3 } = require("./01_intro");

describe("intro tests", () => {
  test("MyObj1", () => {
    const myObj = new MyObj1(0);
    expect(myObj.myVal).toBe(0);
    myObj.set(2);
    expect(myObj.myVal).toBe(2);
  });

  test("makeObj2", () => {
    const myObj = makeObj2(0);
    expect(myObj.myVal).toBe(0);
    myObj.set(2);
    expect(myObj.myVal).toBe(2);
  });

  test("makeObj3", () => {
    const myObj = makeObj3(0);
    expect(myObj.get()).toBe(0);
    myObj.set(2);
    expect(myObj.get()).toBe(2);
  });
});
