function SmartPhone(brand) {
  this.brand = brand;
  
  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function() {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // ?
// Generic - bcz we always return brand - "generic"
console.log(myPhone.getBrand); // ?
// undefined - bcz myPhone.getBrand can't access SmartPhone.prototype.getBrand(), we return only brand and os default
