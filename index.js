let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let i of this.transactions) {
      balance += this.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (!this.isAllowed()) return false;
    this.time = new Date(); //keep track of the time of the transaction
    this.account.addTransaction(this);
    return true;
  }
};

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("snow-patrol");

t1 = new Deposit(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', balance);

t3 = new Deposit(120.00);
t3.commit();
console.log('Transaction 3:', t3);
