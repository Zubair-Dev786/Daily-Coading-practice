// let usersData = [
//   { name: "Ali", age: 20, city: "Karachi" },
//   { name: "Ahmed", age: 17, city: "Lahore" },
//   { name: "Usman", age: 22, city: "Karachi" },
//   { name: "Hamza", age: 19, city: "Islamabad" }
// ];

// let usersname = [];
// let count = 0;

// for(let i = 0; i < usersData.length; i++){
//     if (usersData[i].city.includes("Karachi") && usersData[i].age > 18) {
//         usersname.push(usersData[i].name)
//     }

//     if (usersData[i].age > 18) {
//         count++
//     }
// }

// console.log(usersname);
// console.log(count);

// let products = [
//   { name: "Laptop", price: 80000 },
//   { name: "Mouse", price: 2500 },
//   { name: "Keyboard", price: 5000 },
//   { name: "Monitor", price: 30000 }
// ];

// let findProducts = products[0];

// for(let i = 0; i < products.length; i++){
//     if (products[i].price > findProducts.price) {
//         findProducts = products[i];
//     }
// }

// console.log(findProducts.name);
// console.log(findProducts.price);

// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Ahmed", marks: 42 },
//   { name: "Usman", marks: 67 },
//   { name: "Hamza", marks: 35 }
// ];

// let passStudent = [];

// for(let i = 0; i < students.length; i++){
//     if (students[i].marks >= 40) {
//         passStudent.push(students[i].name);
//     }
// }

// console.log(passStudent);

// let cart = [
//   { name: "Shirt", price: 2500, quantity: 2 },
//   { name: "Shoes", price: 5000, quantity: 1 },
//   { name: "Cap", price: 1000, quantity: 3 }
// ];

// let total = 0;

// for(let i = 0; i < cart.length; i++){
//     total += `${cart[i].price * cart[i].quantity}`
// }

// console.log(total);

// let employees = [
//   { name: "Ali", department: "IT" },
//   { name: "Sara", department: "HR" },
//   { name: "Ahmed", department: "IT" },
//   { name: "Zain", department: "Sales" }
// ];

// let ITDepartmentemp = [];

// for(let i = 0; i < employees.length; i++){
//     if (employees[i].department.includes("IT")) {
//         ITDepartmentemp.push(employees[i].name);
//     }
// }

// console.log(ITDepartmentemp);

// let players = [
//   { name: "Ali", score: 120 },
//   { name: "Hamza", score: 185 },
//   { name: "Usman", score: 150 },
//   { name: "Ahmed", score: 210 }
// ];

// let highestScorePlayer = players[0];

// for(let i = 0; i < players.length; i++){
//     if (players[i].score > highestScorePlayer.score) {
//         highestScorePlayer = players[i];
//     }
// }

// console.log(highestScorePlayer.name);
// console.log(highestScorePlayer.score);

// let products = [
//     { name: "iPhone 15", category: "Mobile" },
//     { name: "Samsung S24", category: "Mobile" },
//     { name: "HP Laptop", category: "Laptop" },
//     { name: "Dell Laptop", category: "Laptop" },
//     { name: "AirPods", category: "Accessories" }
// ];

// let product = prompt("Please Enter a Product Name!")

// let findProduct = [];
// let isFound = false;

// for (let i = 0; i < products.length; i++) {
//     if (products[i].category.toLowerCase().includes(product.toLowerCase())) {
//         findProduct.push(products[i].name);
//         isFound = true;
//     }
// }

// if (product === "") {
//     alert("Please Enter a Product Name!")

// } else {
//     if (isFound === true) {
//         console.log(findProduct);
//     } else {
//         alert("Please Enter a Product Name!")
//     }
// }


// let search = document.getElementById("search");
// let button = document.getElementById("check");

// let quantity = document.getElementById("quantity");
// let productName = document.getElementById("name");
// let price = document.getElementById("price");
// let totalPrice = document.getElementById("totalPrice");


// function checkProduct() {
//     let cart = [
//         { name: "T-Shirt", price: 2500, quantity: 2 },
//         { name: "Jeans", price: 4500, quantity: 1 },
//         { name: "Sneakers", price: 7000, quantity: 2 },
//         { name: "Cap", price: 1200, quantity: 3 },
//         { name: "Watch", price: 5500, quantity: 1 }
//     ];

//     let input = search.value.trim().toLowerCase();
    
//     if (input === "") {
//         alert("Please Enter a Prodcut Name!");
//         return
//     }

//     let isFound = false;
//     let foundProduct;

//     for(let i = 0; i < cart.length; i++){
//         if (cart[i].name.toLowerCase().includes(input)) {
//             isFound = true;
//             foundProduct = cart[i];
//             break
//         }
//     }

//     if (isFound === true) {

//         productName.innerHTML = `Product Name: ${foundProduct.name}`;
//         price.innerHTML = `Product Price: ${foundProduct.price}`;
//         quantity.innerHTML = `Product Quantity: ${foundProduct.quantity}`;
//         totalPrice.innerHTML = "Total Price: " + foundProduct.price * foundProduct.quantity;

//         search.value = "";

//     } else {
//         alert("Product Not Found");
//         search.value = "";
//     }

// }

// button.onclick = checkProduct;

