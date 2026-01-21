// Your app stores users with an isActive flag. You only want active users.

const users = [
  { name: "Alex", isActive: true },
  { name: "Bob", isActive: false },
  { name: "Sam", isActive: true }
];

let b = users.filter(u => u.isActive == true).map(u => u.name)

console.log(b);