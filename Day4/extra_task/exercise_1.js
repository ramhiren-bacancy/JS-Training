const obj1 = {
  a: 1,
  b: { x: 10 },
};

const obj2 = { ...obj1, b: { ...obj1.b, x: 99 } };

console.log(obj1.b.x);
console.log(obj2.b.x);

// output: 10,99
//  in inner level we modified all obj so new create a new obj , which is not referce old obj. what's act act as deep but actual it's shollow copy
