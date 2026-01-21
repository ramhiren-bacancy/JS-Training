class Counter {
  static count = 0 // static (belongs to the class)
  count = 10;     // instance (belongs to each object)

  constructor() {
    Counter.count++;
  }

  getCount() {
    return this.count;
  }

  static getStaticCount() {
    return this.count;
  }
}

const c1 = new Counter();
const c2 = new Counter();

console.log(c1.getCount());        // 10
// bcz - getCount is non static method that's why it refer non static count
console.log(Counter.getStaticCount()); // 2
// bcz - getStaticCount is static method that's why it refer static count
console.log(c1.getStaticCount());  // error
// bcz - we can't access static method with object name
