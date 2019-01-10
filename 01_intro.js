// using the `class` keyword
class MyObj1 {
  constructor(initVal) {
    this.myVal = initVal;
  }

  set(x) {
    this.myVal = x;
  }
}

// using a function with `this`
const makeObj2 = initVal => {
  return {
    myVal: initVal,
    set: function(x) {
      this.myVal = x;
    },
  };
};

// using a function without `this`
const makeObj3 = initVal => {
  let myVal = initVal;
  return {
    get: function() {
      return myVal;
    },
    set: function(val) {
      myVal = val;
    },
  };
};

module.exports = {
  MyObj1,
  makeObj2,
  makeObj3,
};
