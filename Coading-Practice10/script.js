// let orders = [
//     { customer: "Ali", item: "Burger", price: 500, quantity: 2, status: "delivered" },
//     { customer: "Ahmed", item: "Pizza", price: 1200, quantity: 1, status: "pending" },
//     { customer: "Zubair", item: "Fries", price: 300, quantity: 3, status: "delivered" },
//     { customer: "Usman", item: "Biryani", price: 450, quantity: 2, status: "cancelled" }
// ];

// let total = 0;

// for(let i = 0; i < orders.length; i++){
//     if (orders[i].status === "delivered") {
//         console.log(`Customar Name: ${orders[i].customer}, Deliver item: ${orders[i].item}, Price = ${orders[i].price * orders[i].quantity}`);

//         total += orders[i].price * orders[i].quantity;

//     }
// }

// console.log(total);


// let products = [
//     { name: "Laptop", stock: 5, sold: 3 },
//     { name: "Mouse", stock: 10, sold: 7 },
//     { name: "Keyboard", stock: 4, sold: 4 },
//     { name: "Monitor", stock: 2, sold: 5 }
// ];

// for(let i = 0; i < products.length; i++){
//     if (products[i].stock - products[i].sold <= 0) {
//         console.log(`Product Name: ${products[i].name}, \nProducts Stock ${products[i].stock - products[i].sold}, \nProduct Status: Out of Stock`);
//     } else if (products[i].stock - products[i].sold <= 2) {
//         console.log(`Product Name: ${products[i].name}, \nProducts Stock ${products[i].stock - products[i].sold} \nProduct Status: Low Stock`);
//     } else {
//         console.log(`Product Name: ${products[i].name}, \nProducts Stock ${products[i].stock - products[i].sold} \nProduct Status: In Stock`);
//     }
// }


// let users = [
//     { username: "zubair", balance: 5000, active: true },
//     { username: "ali", balance: 2000, active: false },
//     { username: "ahmed", balance: 8000, active: true }
// ];

// let enteredUsername = "ahmed";
// let withdrawAmount = 3000;

// let user;

// for (let i = 0; i < users.length; i++) {
//     if (enteredUsername === users[i].username) {
//         user = users[i];
//     }
// }

// if (!user) {
//     console.log("User Not Found");
// } else if (user.active === false) {
//     console.log("Account is inactive");
// } else if (withdrawAmount > user.balance) {
//     console.log("Insufficient balance");
// } else {
//     console.log(`User: ${user.username} \nWithdrawal: ${withdrawAmount} \nRemaining Balance ${user.balance - withdrawAmount}`);

// }

// console.log(user);


// let transactions = [
//     { type: "deposit", amount: 5000 },
//     { type: "withdraw", amount: 2000 },
//     { type: "withdraw", amount: 1000 },
//     { type: "deposit", amount: 3000 },
//     { type: "withdraw", amount: 7000 }
// ];

// let balance = 10000;

// for (let i = 0; i < transactions.length; i++) {
//     if (transactions[i].type === "deposit") {
//         balance += transactions[i].amount;
//     } else if (transactions[i].type === "withdraw") {
//         if (transactions[i].amount > balance) {
//             console.log("Balance Not Enought");
//         } else {
//             balance -= transactions[i].amount
//         }
//     }
// }

// console.log(balance);

// let cart = [
//     { name: "Laptop", price: 80000, quantity: 1 },
//     { name: "Mouse", price: 1500, quantity: 2 },
//     { name: "Keyboard", price: 3000, quantity: 1 }
// ];

// let grandTotal = 0;

// for(let i = 0; i < cart.length; i++){
//     console.log(`Product Name: ${cart[i].name} \nProduct Price: ${cart[i].price} \nProduct Quantity ${cart[i].quantity}`);

//     grandTotal += cart[i].price * cart[i].quantity;
// }

// console.log(grandTotal);

