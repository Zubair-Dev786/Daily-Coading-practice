// let users = [
//     { username: "zubair", password: "1234", active: true },
//     { username: "ali", password: "5678", active: false },
//     { username: "ahmed", password: "9999", active: true }
// ];

// let enteredUsername = "ali";
// let enteredPassword = "5678";

// let user;

// for (let i = 0; i < users.length; i++) {
//     if (enteredUsername === users[i].username) {
//         user = users[i];
//     }
// }

// console.log(user);

// if (!user) {
//     console.log("User not found");
// } else if (enteredPassword !== user.password) {
//     console.log("Incorrect password");
// }else if(user.active === false){
//     console.log("Account is inactive");
// } else {
// console.log("Login successful");
// }

// let products = [
//     { name: "Laptop", price: 80000, stock: 3 },
//     { name: "Mouse", price: 1500, stock: 5 },
//     { name: "Keyboard", price: 3000, stock: 0 }
// ];

// let productName = "Laptop";
// let requestedQuantity = 2;

// let product;

// for (let i = 0; i < products.length; i++) {
//     if (productName === products[i].name) {
//         product = products[i];
//     }
// }

// console.log(product);

// if (!product) {
//     console.log("Product not found");
// } else if (product.stock === 0) {
//     console.log("Out of stock");
// } else if (requestedQuantity > product.stock) {
//     console.log("Not enough stock");
// } else {
//     console.log(`Product name: ${product.name} \nQuantity: ${requestedQuantity} \nProduct Price: ${product.price} \nTotal price: ${product.price * requestedQuantity}`);

// }

// let cart = [
//     { name: "Laptop", price: 80000, quantity: 1 },
//     { name: "Mouse", price: 1500, quantity: 2 },
//     { name: "Keyboard", price: 3000, quantity: 1 }
// ];

// let discountCode = "SAVE10";
// let grandTotal = 0;

// for(let i = 0; i < cart.length; i++){
//     console.log(`Product Names: ${cart[i].name}, Product Price: ${cart[i].price * cart[i].quantity}`);
    
//     grandTotal += cart[i].price * cart[i].quantity
// }

// let discount = grandTotal - (grandTotal * 0.90);

// console.log(grandTotal);
// console.log(discount);

// if (discountCode === "SAVE10" && grandTotal >= 50000) {
//     console.log(grandTotal - discount);
// }else{
//     console.log(grandTotal);
// }

