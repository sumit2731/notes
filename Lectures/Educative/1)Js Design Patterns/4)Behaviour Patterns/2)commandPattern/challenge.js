/* 
class BankAccount {

    constructor(amount){
        this.amount = amount
    }

  checkAmount() {
      console.log(this.amount)
  }
  
  withdrawMoney(withdrawamount) {
    if(withdrawamount > this.amount){
        console.log("Not enough money")
    }
    else{
        this.amount -=  withdrawamount
    }
  }
   depositAmount(money){
        this.amount += money
    }
}

var account = new BankAccount(100)
account.checkAmount()
account.withdrawMoney(10)
account.checkAmount()
account.depositAmount(50)
account.checkAmount()


In the code above, you have a BankAccount class

Your task is to modify the code above by using the command pattern. Remember, the pattern has the following parts:

commands: WithDraw, DepositAmount, and CheckAmount

receiver: BankAccount

invoker: an AccountManager carrying out the operations requested using a request function

Use your knowledge of the pattern to divide your code into these objects.

*/

//receiver
class BankAccount {

    constructor(amount){
        this.amount = amount
    }

  checkAmount() {
      console.log(this.amount)
  }
  
  withdrawMoney(withdrawamount) {
    if(withdrawamount > this.amount){
        console.log("Not enough money")
    }
    else{
        this.amount -=  withdrawamount
    }
  }
   depositAmount(money){
        this.amount += money
    }
}

//command
class Command {
    constructor(bankAccount) {
        this.bankAccount = bankAccount;
    }
    execute(...args) {
        console.log(this.commandName);
        this.bankAccount[this.commandName](...args);
    };
}

//command
class CheckAmountBalanceCommand extends Command {
    constructor(bankAccount) {
        super(bankAccount);
        this.commandName = 'checkAmount';
    }
}

class DepositMonayCommand extends Command {
    constructor(bankAccount) {
        super(bankAccount);
        this.commandName = 'depositAmount';
    }
}

class WithDrawMoneyCommand extends Command {
    constructor(bankAccount) {
        super(bankAccount);
        this.commandName = 'withdrawMoney';
    }
}

//invoker

class AccountManager {

    executeCommand(command,...args) {
        command.execute(...args);
    }
}


const bankAccount = new BankAccount(1000);
const checkAccountBalanceCommand = new CheckAmountBalanceCommand(bankAccount);
const depositMoneyCommand = new DepositMonayCommand(bankAccount);
const accountManager = new AccountManager();
accountManager.executeCommand(depositMoneyCommand,100);
accountManager.executeCommand(checkAccountBalanceCommand);



