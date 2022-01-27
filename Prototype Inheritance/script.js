const BankAccount = function(opening){
    return this.balance = opening;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
    this.print();
    return this; //Returning "this" allows method chaining.
}

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
    this.print();
    return this;
}

BankAccount.prototype.print = function(){
    console.log(`Your new account balance is ${this.balance}`);
}

const account = new BankAccount(300);

account
    .deposit(10) //prints 310
    .withdraw(110) //prints 200
