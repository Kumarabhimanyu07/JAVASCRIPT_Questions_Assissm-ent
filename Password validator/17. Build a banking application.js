// Define a customer object with name and balance properties
const customer = {
    name: "John Doe",
    balance: 1000, // Initial balance
    // Method to deposit money into the account
    deposit: function(amount) {
        this.balance += amount; // Increment the balance by the deposited amount
        console.log(`Deposit of ${amount} successfully processed. Current balance: ${this.balance}`);
    },
    // Method to withdraw money from the account
    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount; // Decrement the balance by the withdrawn amount
            console.log(`Withdrawal of ${amount} successfully processed. Current balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds for withdrawal.");
        }
    }
};

// Example usage
console.log("Initial balance:", customer.balance);
customer.deposit(500); // Deposit 500
customer.withdraw(200); // Withdraw 200
customer.withdraw(1500); // Attempt to withdraw more than available balance
