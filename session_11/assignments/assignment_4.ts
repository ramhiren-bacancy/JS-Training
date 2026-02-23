
// Create a constant adminUser .
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.

const adminUser = {
  id: "1",
  name: "Hiren",
  role: "admin",
  age : 22
};

type adminUserType = typeof adminUser

