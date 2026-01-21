const user = {
  name: "Alex",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user.greet()

// why : When we use a regular function inside setTimeout, it creates its own scope.
// setTimeout calls the regular function in the global context, so this becomes the global object (window).

const user1 = {
  name: "Alex",
  greet() {
    setTimeout( () => {
      console.log(this.name);
    }, 1000);
  }
};

user1.greet()