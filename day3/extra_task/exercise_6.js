// Remove users with invalid names
// Normalize names (trim + capitalize first letter)
// Return only admin names

const apiUsers = [
  { id: 1, name: " Alex ", role: "ADMIN" },
  { id: 2, name: null, role: "USER" },
  { id: 3, name: "sam", role: "ADMIN" }
];

const a = apiUsers.filter(i => i.name != null && i.role == "ADMIN")
.map((i)=>{
    let name = i.name
    name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1)
    return name
})

console.log(a);