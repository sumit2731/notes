let myAccount = {
    name: 'Andrew mead',
    expenses: 0,
    income: 0
};
let myAccount2 = myAccount;
myAccount2 = {};
myAccount2.income = 200000;

let addExpense = function(account,amount) {
    // account.expenses = account.expenses + amount;
    account = {};
    console.log(account);
}
addExpense(myAccount, 2.50);
console.log(myAccount);