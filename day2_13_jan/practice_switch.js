// switch compares values using strict equality (===).

/* const orderStatus = "DELIVERED";

switch (orderStatus) { // orderStatus --> Not Replace With "true"
  case "PENDING":
    console.log("Your order is being prepared ⏳");
    break;

  case "OUT_FOR_DELIVERY":
    console.log("Your order is out for delivery 🚚");
    break;

  case "DELIVERED":
    console.log("Your order has been delivered ✅");
    break;

  default:
    console.log("Unknown order status ❌");
}
 */


//But in This case  value is boolean so that is same 
/* let x = 10;

switch (true) {  // You can replace true --> x
  case x > 15:
    console.log("Greater than 15");
    break;

  case x > 5:
    console.log("Greater than 5");
    break;

  default:
    console.log("5 or less");
}
 */


// finally conclussion 

    /* switch (EXPRESSION) {
      case VALUE:
    }

    EXPRESSION === VALUE */

    //if condition any wrong not then switch case run default statement. and switch run without default statement
    // but then any condition doesn't match noting in output.




// console.log(sayHello()); // it give me Hello (from innner) undefined (from outer) 
// sayHello() // Hello --> Hoisting
// function sayHello() {
//   console.log("Hello");
// }


// sayHi();   // ❌ TypeError - sayHi() is not function

// var sayHi = function () {
//   console.log("Hi");
// };


// sayHey();   // ❌ ReferenceError -- [Not hoisted]

// const sayHey = function () {
//   console.log("Hey");
// };


// console.log(a)❌ ReferenceError- Can not acces before Inti. -- [Not hoisted]
// const a =10


// sayArrow();   // ❌ ReferenceError -- Not Hoisted

// const sayArrow = () => {
//   console.log("Arrow");
// };