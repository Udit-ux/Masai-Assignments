function bankAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit: function(amount) {
      if (amount <= 0) {
        return "Deposit amount must be greater than zero.";
      }
      balance += amount;
      return `Deposited ₹${amount}. New Balance: ₹${balance}`;
    },

    withdraw: function(amount) {
      if (amount <= 0) {
        return "Withdraw amount must be greater than zero.";
      }
      if (amount > balance) {
        return "Insufficient funds.";
      }
      balance -= amount;
      return `Withdrew ₹${amount}. New Balance: ₹${balance}`;
    },

    getBalance: function() {
      return `Current Balance: ₹${balance}`;
    },

    reset: function() {
      balance = initialBalance;
      return `Balance has been reset to ₹${balance}`;
    }
  };
}
