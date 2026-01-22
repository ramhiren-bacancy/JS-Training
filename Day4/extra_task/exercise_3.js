// Write mergeConfig(defaultConfig, envConfig) that:
// Returns a new object
// envConfig overrides defaultConfig
// Original objects remain unchanged

/* const defaultConfig = {
  timeout: 5000,
  retry: 3
};

const envConfig = {
  retry: 5
}; */


const obj1 = {
  a: 1,
  b: { x: 10 }
};

const obj2 = { ...obj1,b:{...obj1.b,x:99}};

// obj2.b.x = 99;

console.log(obj1.b.x);
console.log(obj2.b.x);