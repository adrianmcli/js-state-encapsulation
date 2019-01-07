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

// instantiate objects
const x = new MyObj1(0);
const y = makeObj2(0);
const z = makeObj3(0);

// log initial values
console.log([x.myVal, y.myVal, z.get()]); // [ 0, 0, 0 ]

// call set method on all 3 objects
x.set(2);
y.set(2);
z.set(2);

// inspect object values
console.log([x.myVal, y.myVal, z.get()]); // [ 2, 2, 2 ]
