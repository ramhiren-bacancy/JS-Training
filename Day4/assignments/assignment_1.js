const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };
  
  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = [2.0];
  
  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // 2
console.log(registry.active[0].name); // Gamma
// because registry.active and copy.active is refer same Non - primitive datatype

console.log(registry.version);       // undefined
// because verion is non primitive that's why not registry.version is not acquire by original obj
