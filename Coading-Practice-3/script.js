// let products = [
//   { name: "Laptop", price: 80000, stock: 5 },
//   { name: "Mouse", price: 1500, stock: 0 },
//   { name: "Keyboard", price: 3000, stock: 8 },
//   { name: "Monitor", price: 25000, stock: 0 }
// ]

// let newProducts = [];

// for(let i = 0; i < products.length; i++){
//     if (products[i].stock > 0) {
//         newProducts.push(products[i]);
//     }
// }

// console.log(newProducts);

// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Ahmed", marks: 42 },
//   { name: "Zubair", marks: 73 },
//   { name: "Usman", marks: 35 }
// ];

// let passStudents = [];

// for(let i = 0; i < students.length; i++){
//     if (students[i].marks >= 50) {
//         passStudents.push(students[i]);
//     }
// }

// console.log(passStudents);

// let products = [
//   { name: "Laptop", price: 80000, stock: 5 },
//   { name: "Mouse", price: 1500, stock: 2 },
//   { name: "Keyboard", price: 3000, stock: 0 },
//   { name: "Monitor", price: 25000, stock: 3 }
// ];

// let expexsiveProducts = [];

// for(let i = 0; i < products.length; i++){
//     if (products[i].price > 5000) {
//         expexsiveProducts.push(products[i]);
//     }
// }

// console.log(expexsiveProducts);

// let users = [
//   { name: "Ali", age: 17 },
//   { name: "Ahmed", age: 22 },
//   { name: "Zubair", age: 19 },
//   { name: "Usman", age: 15 }
// ];

// let adultusers = [];

// for(let i = 0; i < users.length; i++){
//     if (users[i].age >= 18) {
//         adultusers.push(users[i]);
//     }
// }

// console.log(adultusers);

// let products = [
//   { name: "Laptop", price: 80000, stock: 5 },
//   { name: "Mouse", price: 1500, stock: 0 },
//   { name: "Keyboard", price: 3000, stock: 8 }
// ];

// let totalSkock = 0;

// for(let i = 0; i < products.length; i++){
//     totalSkock += products[i].stock;
// }

// console.log(totalSkock);

// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Ahmed", marks: 42 },
//   { name: "Zubair", marks: 73 },
//   { name: "Usman", marks: 35 }
// ];

// let total = 0;

// for(let i = 0; i < students.length; i++){
//     total += students[i].marks;
// }

// let avarage = total / students.length;

// console.log(avarage);

// let products = [
//   { name: "Laptop", price: 80000, stock: 5 },
//   { name: "Mouse", price: 1500, stock: 0 },
//   { name: "Keyboard", price: 3000, stock: 8 },
//   { name: "Monitor", price: 25000, stock: 2 }
// ];

// let userproduct = [];

// for(let i = 0; i < products.length; i++){
//     if (products[i].price < 5000 && products[i].stock > 0) {
//         userproduct.push(products[i]);
//     }
// }

// console.log(userproduct);


// let productsContainer = document.getElementById("container");
// let cartItems = document.getElementById("cartItems");
// let total = document.getElementById("total");
// let quantity = document.getElementById("quantity")
// let cart = [];

// const display = () => {
//     const productsArray = [
//         {
//             name: "Laptop",
//             price: 80000
//         },
//         {
//             name: "Mouse",
//             price: 1500
//         },
//         {
//             name: "Keyboard",
//             price: 3000
//         }
//     ];

//     for (let i = 0; i < productsArray.length; i++) {


//         let items = productsArray[i];
//         productsContainer.innerHTML += `
//         <div id="products">
//         <h2>${items.name}</h2>
//         <p>${items.price}</p>
//             <button onclick="addToCart('${items.name}', '${items.price}')">Add To Cart ${items.name}</button>
//         </div>
//         `

//     }
// }


// const addToCart = (name, price) => {
//     cart.push({
//         name: name,
//         price: price
//     })
//     cartItems.innerHTML = "";

//     let totalPrice = 0;

//     for (let i = 0; i < cart.length; i++) {

//         cartItems.innerHTML += `
//     <ul>
//         <li>Name: ${cart[i].name}, Price: ${cart[i].price}</li>
//     </ul>
//     `

//         totalPrice += Number(cart[i].price);
//     }

//     total.innerHTML = totalPrice;

// }


// display()
