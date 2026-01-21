function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype; //Line -28 - Animal
// Animal.prototype = Dog.prototype //Line-28 - Dog

Dog.prototype.bark = function () {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // "woof!"
// bcz in that case Dog.prototype and animal.prototype refer same prototype so,obj which create by Animal also access to Dog prototype
console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?
// Animal - bcz in line 15 Dog's original prototype is overwrite by animal's prototype. that's why
