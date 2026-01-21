function masterClone(obj) {
  // Base Condition
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    const copy = [];
    for (let i = 0; i < obj.length; i++) {
      copy[i] = masterClone(obj[i]);
    }
    return copy;
  }

  // Handle objects
  const copy = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = masterClone(obj[key]);
    }
  }

  return copy;
}

const a = {
  user: "xyz",
  scores: [10, 20],
  info: {
    active: true
  }
};

const b = masterClone(a);

b.user = "abc"

console.log(a.user);
console.log(b.user);
