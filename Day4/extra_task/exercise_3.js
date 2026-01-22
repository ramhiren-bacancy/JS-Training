// Balance must not be directly modified outside the class
// withdraw should not allow negative balance
// Return the updated balance after each operation


class BankAccount {
  #balance; // private field - in JS there is not any private keyword.

  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) return this.#balance;
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance");
      return this.#balance;
    }
    this.#balance -= amount;
    return this.#balance;
  }

  get balance() {
    return this.#balance;
  }
}


const a1 = new BankAccount("Ram", 1000);

account1.deposit(500);
console.log(account1.balance); 

account1.withdraw(300);
console.log(account1.balance); 
