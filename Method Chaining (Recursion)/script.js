class BankAccount {
    constructor(opening){
        this.balance = opening;
    }

    deposit(amount){
        this.balance += amount;
        this.printNewBalance();
        return this;
    }

    withdraw(amount){
        this.balance -= amount;
        this.printNewBalance();
        return this;
    }

    printNewBalance(){
        console.log(`Your new account balance is ${this.balance}`);
    }
}

const account = new BankAccount(300); //Intialize constructor with an opening balance.

account.deposit(10).withdraw(200).deposit(40).deposit(10);  //final balnce should print 160.