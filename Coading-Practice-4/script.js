// let marks = [45, 78, 32, 90, 61, 28, 85];
// let count = 0

// for(let i = 0; i < marks.length; i++){
//     if (marks[i] >= 50) {
//         count++
//     }
// }

// console.log(count);

// let numbers = [12, 7, 9, 20, 15, 8, 3, 10];
// let count = 0;

// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] %2 === 0) {
//         count++
//     }
// }

// console.log(count);

// let products = [
//   { name: "Laptop", stock: 5 },
//   { name: "Mouse", stock: 0 },
//   { name: "Keyboard", stock: 8 },
//   { name: "Monitor", stock: 0 },
//   { name: "Headphones", stock: 3 }
// ];

// let count = 0;

// for(let i = 0; i < products.length; i++){
//     if (products[i].stock === 0) {
//         count++
//     }
// }

// console.log(count);

// let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Headphones"];
// let search = "mouse";

// let isFound = false;

// for(let i = 0; i < products.length; i++){
//     if (products[i].toLowerCase().includes(search.toLowerCase())) {
//         isFound = true;
//     }
// }

// if (isFound === true) {
//     console.log("Product Found");
// } else {
//     console.log("Product Not Found");
// }

// let prices = [1500, 3000, 1200, 5000, 800];
// let total = 0;

// for(let i = 0; i < prices.length; i++){
//     total += prices[i];
// }

// console.log(total);

// let students = [
//   { name: "Ali", marks: 75 },
//   { name: "Ahmed", marks: 42 },
//   { name: "Hamza", marks: 88 },
//   { name: "Usman", marks: 35 },
//   { name: "Bilal", marks: 63 }
// ];

// for(let i = 0; i < students.length; i++){
//     if (students[i].marks >= 50) {
//         console.log(students[i].name + " Pass");
//     }else{
//         console.log(students[i].name + " Fail");
//     }
// }


// let employees = [
//   { name: "Ali", salary: 40000 },
//   { name: "Ahmed", salary: 60000 },
//   { name: "Hamza", salary: 35000 },
//   { name: "Usman", salary: 80000 }
// ];

// for(let i = 0; i < employees.length; i++){
//     if (employees[i].salary >= 50000) {
//         console.log(employees[i].name + " High Salary");
//     }else{
//         console.log(employees[i].name + " Low Salary");
//     }
// }

// let cart = [
//   { name: "Laptop", stock: 5 },
//   { name: "Mouse", stock: 0 },
//   { name: "Keyboard", stock: 3 },
//   { name: "Monitor", stock: 0 }
// ];

// for(let i = 0; i < cart.length; i++){
//     if (cart[i].stock > 0) {
//         console.log(cart[i].name + " Available");
//     }else{
//         console.log(cart[i].name + "Out of Stock");
//     }
// }

// let students = [
//     { name: "Ali", marks: 85 },
//     { name: "Ahmed", marks: 67 },
//     { name: "Hamza", marks: 42 },
//     { name: "Usman", marks: 91 }
// ];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].marks >= 80) {
//         console.log(students[i].name + " A");
//     } else if (students[i].marks >= 60 && students[i].marks < 80) {
//         console.log(students[i].name + " B");
//     } else if (students[i].marks >= 50 && students[i].marks < 60) {
//         console.log(students[i].name + " C");
//     } else {
//         console.log(students[i].name + " Fail");
//     }
// }

// let numbers = [23, 56, 12, 89, 34, 67];

// let highestNumber = numbers[0];

// for(let i = 0; i < numbers.length; i++){
//     if (numbers[i] > highestNumber) {
//         highestNumber = numbers[i];
//     }
// }

// console.log(highestNumber);

// let products = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Keyboard", price: 3000 },
//   { name: "Monitor", price: 25000 }
// ];

// for(let i = 0; i < products.length; i++){
//     if (products[i].price >= 20000) {
//         console.log(products[i].name + ": Discount Applied");
//     }else{
//         console.log(products[i].name + ": No Discount");
//     }
// }

// let products = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 1500 },
//   { name: "Keyboard", price: 3000 },
//   { name: "Monitor", price: 25000 }
// ];

// for(let i = 0; i < products.length; i++){
//     if (products[i].price >= 20000) {
//         console.log(products[i].name + " " + products[i].price * 0.9);
//     }else{
//         console.log(products[i].name + " " + products[i].price);
//     }
// }


// let cart = [
//   { name: "Laptop", price: 80000, quantity: 1 },
//   { name: "Mouse", price: 1500, quantity: 2 },
//   { name: "Keyboard", price: 3000, quantity: 1 },
//   { name: "Headphones", price: 5000, quantity: 3 }
// ];

// let grandTotal = 0;

// for(let i = 0; i < cart.length; i++){
//     console.log(cart[i].name + " " + cart[i].price * cart[i].quantity);
//     grandTotal += cart[i].price * cart[i].quantity;
// }

// console.log(grandTotal);

// let cart = [
//   { name: "Laptop", price: 80000, quantity: 1, stock: 5 },
//   { name: "Mouse", price: 1500, quantity: 2, stock: 1 },
//   { name: "Keyboard", price: 3000, quantity: 1, stock: 8 },
//   { name: "Headphones", price: 5000, quantity: 3, stock: 2 }
// ];

// let availableProducts = [];

// for(let i = 0; i < cart.length; i++){
//     if (cart[i].quantity <= cart[i].stock) {
//         availableProducts.push(cart[i]);
//     }
// }

// console.log(availableProducts);

// let grandTotal = 0;

// for(let i = 0; i < availableProducts.length; i++){
//     grandTotal += availableProducts[i].price * availableProducts[i].quantity;
// }

// console.log(grandTotal);

// let cart = [
//   { name: "Laptop", price: 80000, quantity: 1 },
//   { name: "Mouse", price: 1500, quantity: 2 },
//   { name: "Keyboard", price: 3000, quantity: 1 },
//   { name: "Headphones", price: 5000, quantity: 3 }
// ];

// let grandTotal = 0;

// for(let i = 0; i < cart.length; i++){
//     console.log(cart[i].name + cart[i].price * cart[i].quantity);
//     grandTotal += cart[i].price * cart[i].quantity;
// }

// console.log(grandTotal);

// if (grandTotal >= 50000) {
//     console.log(grandTotal * 0.9);
// } else {
//     console.log(grandTotal);
// }

