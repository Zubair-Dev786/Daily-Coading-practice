// let cart = [
//   { name: "Laptop", price: 80000, quantity: 1 },
//   { name: "Mouse", price: 1500, quantity: 2 },
//   { name: "Keyboard", price: 3000, quantity: 1 }
// ];

// let total = [];
// let grandTotal = 0;

// for(let i = 0; i < cart.length; i++){
//     total.push(cart[i].price * cart[i].quantity);
//     grandTotal += cart[i].price * cart[i].quantity;
// }

// console.log(total);
// console.log(grandTotal);

// let cart = [
//     { name: "Laptop", quantity: 2, stock: 5 },
//     { name: "Mouse", quantity: 4, stock: 3 },
//     { name: "Keyboard", quantity: 1, stock: 2 }
// ];

// for (let i = 0; i < cart.length; i++) {
//     if (cart[i].quantity <= cart[i].stock) {
//         console.log(`${cart[i].name}: Available`);
//     } else {
//         console.log(`${cart[i].name}: Not Available`);
//     }
// }

// let cart = [
//   { name: "Laptop", price: 80000, quantity: 1 },
//   { name: "Mouse", price: 1500, quantity: 2 },
//   { name: "Keyboard", price: 3000, quantity: 1 }
// ];

// let grandTotal = 0;

// for(let i = 0; i < cart.length; i++){
//     console.log(`${cart[i].name}: ${cart[i].price * cart[i].quantity}`);

//     grandTotal += cart[i].price * cart[i].quantity;
// }

// let discount = grandTotal - (grandTotal * 0.90);

// if (grandTotal >= 50000) {
//     console.log(grandTotal - discount);
// } else {
//     console.log(grandTotal);
// }


// let expenses = [
//   { name: "Food", amount: 5000 },
//   { name: "Transport", amount: 2500 },
//   { name: "Internet", amount: 3000 },
//   { name: "Shopping", amount: 12000 },
//   { name: "Electricity", amount: 4500 }
// ]

// let budget = 20000;
// let highestExpense = expenses[0];
// let grandTotal = 0;

// for(let i = 0; i < expenses.length; i++){
//     grandTotal += expenses[i].amount;

//     if (expenses[i].amount > highestExpense.amount) {
//         highestExpense = expenses[i];
//     }
// }

// let balance = budget - grandTotal;

// console.log(balance);
// console.log(grandTotal);
// console.log(`Highest Expense: ${highestExpense.name} - ${highestExpense.amount}`);

// if (grandTotal >= budget) {
//     console.log("Budget Exceeded");
// } else {
//     console.log("Budget Remaining:" + balance);
// }


let users = [
    { username: "zubair", password: "1234", active: true },
    { username: "ali", password: "5678", active: false },
    { username: "ahmed", password: "9999", active: true }
];

let enteredUsername = "ali";
let enteredPassword = "5678";

let user;

for (let i = 0; i < users.length; i++) {
    if (users[i].username === enteredUsername && enteredPassword === users[i].password && users[i].active === true) {
        user = users[i];
        break;
    }
}

console.log(user);

