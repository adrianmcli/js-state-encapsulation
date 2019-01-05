// using the `class` keyword
class MyObj1 {
  constructor(initVal) {
    this.myVal = initVal;
  }

  set(x) {
    this.myVal = x;
  }
}

// using a function constructor with `this`
const MyObj2 = initVal => {
  return {
    myVal: initVal,
    set: function(x) {
      this.myVal = x;
    },
  };
};

// using a function constructor without `this` but private member
const MyObj3 = initVal => {
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

const x = new MyObj1(0);
const y = MyObj2(0);
const z = MyObj3(0);

console.log([x.myVal, y.myVal, z.get()]); // [ 0, 0, 0 ]

x.set(2)
y.set(2)
z.set(2)

console.log([x.myVal, y.myVal, z.get()]); // [ 2, 2, 2 ]
