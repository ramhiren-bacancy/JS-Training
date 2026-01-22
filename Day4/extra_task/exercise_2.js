// Write a function addRole(state, role) that:
// Does NOT mutate the original state
// Adds role to user.roles
// Returns a new state object

const state = {
  user: {
    id: 1,
    name: "Ram",
    roles: ["user"]
  }
};

function addRole(state,role){
    const newState = structuredClone(state);
    newState.user.roles.push(role);
    return newState

}

const newState = addRole(state, "admin");

console.log(state.user.roles);
console.log(newState.user.roles);
