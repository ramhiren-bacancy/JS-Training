const user = {
    name: "Alex",
    greet: () => {
        console.log("Hello, " + this.name);
    }
};

user.greet(); // Hello, undefined


//Because Arrow Function does not have own this keyword.
// in this case that refere window object but in window we have not declare name that's why Hello undefined Arrived.


// To avoid that we replce arrow function with normal function 

const user1 = {
    name: "Alex",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

user1.greet(); // Hello, Alex
