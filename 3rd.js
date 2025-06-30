function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      if (amount <= 0) {
        return "Deposit amount must be greater than zero.";
      }
      balance += amount;
      return balance;
    },

    withdraw: function(amount) {
      if (amount <= 0) {
        return "Withdraw amount must be greater than zero.";
      }
      if (amount > balance) {
        return "Insufficient funds.";
      }
      balance -= amount;
      return balance;
    },

    getBalance: function() {
      return balance;
    }
  };
}
const account = createBankAccount(100);

console.log(account.deposit(50));     // Output: 150
console.log(account.withdraw(30));    // Output: 120
console.log(account.getBalance());    // Output: 120
