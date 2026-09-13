// let username = prompt("Please Enter your Name!");
// let password = prompt("Please Enter a password");

// if (username === "") {
//     alert("Username is required");
// }else if(password === ""){
//     alert("Password is Required");
// }else if(password.length < 6){
//     alert("Password Too short");
// }else{
//     alert("Login SuccesFully")
// }

// let temperature = +prompt("Please Enter a temprature");

// if (temperature === "") {
//     alert("Please Enter a Temprature!")
// } else if (temperature < 10) {
//     alert("Very Cold")
// } else if (temperature >= 10 && temperature = 20) {
//     alert("Cold")
// } else if (temperature >= 20 && temperature = 30) {
//     alert("Normal")
// } else if (temperature >= 30 && temperature <= 40) {
//     alert("Hot")
// } else {
//     alert("Very Hot")
// }

// let usercart = prompt("Please Enter a totalAmount in your shopping cart!");

// if(usercart === ""){
//     alert("Please Enter your cart Amount");
// } else if (usercart >= 5000) {
//     alert("Total Amount is " + usercart * (80 / 100))
// } else if (usercart >= 3000) {
//     alert("Total Amout is " + usercart * (90 / 100))
// } else if (usercart >= 1000) {
//     alert("Total Amount is " + usercart * (95 / 100))
// } else {
//     alert("Total Amount is " + usercart)
// }

// let firstName = prompt("Enter your first Name");
// let lastName = prompt("Enter your Last Name");

// if (firstName === "") {
//     console.log("Please Enter a First Name!");
// }else if(lastName === ""){
//     console.log("Please Enter a Last Name!");
// } else {
//     console.log(firstName.toLowerCase() + lastName.toLowerCase());
// }

// let age = 18;

// if (age >= 18) {
//     console.log("You can apply");
// } else {
//     console.log("You cannot apply");
// }


// let userAge = +prompt("Please Enter your Age!");

// if (userAge === 0) {
//     console.log("Please Enter your age");
// }else if(userAge <= 0){
//     console.log("Invalid Age");
// }else if(userAge <= 5){
//     console.log("Free Tickit");
// }else if(userAge >= 6 && userAge <= 12){
//     console.log("Child Ticket");
// }else if(userAge >= 13 && userAge <= 17){
//     console.log("Teen Ticket");
// }else if(userAge >= 18 && userAge <= 59){
//     console.log("Adult Ticket");
// } else {
//     console.log("Senior Ticket");
// }

// let balance = 10000;
// let withdrawal = +prompt("Please Enter amount!");

// if (withdrawal <= 0) {
//     console.log("Invalid amount");
// } else if(withdrawal > balance){
//     console.log("Insufficient balance");
// } else if(!withdrawal %100 === 0){
//     console.log("Enter amount in multiples of 100");
// } else {
//     console.log("blance");
// }

// let englishMakrs = +prompt("Please Enter a English Marks");
// let mathMarks = +prompt("Please Enter a Math Marks");
// let computerMarks = +prompt("Please Enter a computer Marks");

// let marks_Avarage = (englishMakrs + mathMarks + computerMarks) / 3;


// if (englishMakrs <= 0 || englishMakrs > 100 || mathMarks <= 0 || mathMarks > 100 || computerMarks <= 0 || computerMarks > 100) {
//     alert("Plese Enter a Valid Marks")
// } else if (englishMakrs < 40 || mathMarks < 40 || computerMarks < 40) {
//     alert("Fail")
// } else if (marks_Avarage >= 80) {
//     alert("Grade A")
// } else if (marks_Avarage >= 70 && marks_Avarage < 80) {
//     alert("Grade B")
// } else if (marks_Avarage >= 60 && marks_Avarage < 70) {
//     alert("Grade C")
// } else if (marks_Avarage >= 50 && marks_Avarage < 60) {
//     alert("Grade D")
// } else if (marks_Avarage >= 40 && marks_Avarage < 50) {
//     alert("Grade E")
// }

// let orderAmount = +prompt("Please Enter a Order Amount");

// if (orderAmount === 0) {
//     console.log("Please Enter a Amount");
// }else if(orderAmount <= 0){
//     console.log("Invalid Amount");
// }else if(orderAmount >= 3000 && orderAmount < 5000){
//     console.log("delivery charges is 200, Total Amount is " + (orderAmount + 200));
// }else if(orderAmount >= 1000 && orderAmount < 3000){
//     console.log("delivery charges is 150, Total Amount is " + (orderAmount + 150));
// }else if(orderAmount > 0 && orderAmount < 1000){
//     console.log("delivery charges is 250, Total Amount is " + (orderAmount + 250));
// } else {
//     console.log("Free delivery");
// }

// letbalance = 10000
// let withdrawal = +prompt("Please Enter amount");

// if (withdrawal <= 0) {
//     alert("Invalid Amount");
// } else if (withdrawal > balance) {
//     alert("Insufficient balance")
// } else if (withdrawal % 100 !== 0) {
//     alert("Enter amount in multiples of 100")
// } else {
//     alert( balance - withdrawal);
// }

// let productPrice = +prompt("Please Enter a Product Price");
// let productQuantity = +prompt("Please Enter a Quantity");
// let userAge = +prompt("Please Enter a Age!");

// let total = productPrice * productQuantity;

// if (productPrice <= 0) {
//     alert("Invalid Price")
// } else if (productQuantity <= 0) {
//     alert("Invalid Quantity")
// } else if (userAge <= 0 || userAge > 120) {
//     alert("Invalid Age");
// } else {
//     if (total >= 5000) {
//         alert("Total = " + total * (80 / 100))
//     } else if (total >= 3000 && total < 5000) {
//         alert("Total = " + total * (85 / 100))
//     } else if (total >= 1000 && total < 3000) {
//         alert("Total = " + total * (90 / 100))
//     } else {
//         alert("Total = " + total);
//     }
// }

// let englishMakrs = +prompt("Please Enter a English Marks");
// let mathMarks = +prompt("Please Enter a Math Marks");
// let computerMarks = +prompt("Please Enter a Computer Marks");
// let physicsMarks = +prompt("Please Enter a Physics Marks");

// let totalMarks = englishMakrs + mathMarks + computerMarks + physicsMarks;

// let marks_Avarage = totalMarks / 4

// if (englishMakrs <= 0 || englishMakrs > 100 ||
//     mathMarks <= 0 || mathMarks > 100 ||
//     computerMarks <= 0 || computerMarks > 100 ||
//     physicsMarks <= 0 || physicsMarks > 100) {
//     alert("Please Enter a Valid Marks!");
// } else {
//     if (englishMakrs < 40 || mathMarks < 40 || computerMarks < 40 || physicsMarks < 40) {
//         alert("Fail");
//     } else if (marks_Avarage >= 80) {
//         alert("Grade A");
//     } else if (marks_Avarage >= 70 && marks_Avarage < 80) {
//         alert("Grade B");
//     } else if (marks_Avarage >= 60 && marks_Avarage < 70) {
//         alert("Grade C");
//     } else if (marks_Avarage >= 50 && marks_Avarage < 60) {
//         alert("Grade D");
//     } else if (marks_Avarage >= 40 && marks_Avarage < 50) {
//         alert("Grade E");
//     }
// }


// let product_Price = +prompt("Please Enter a Product Price");
// let quantity = +prompt("Please Enter a Product Quantity");
// let customer_Type = prompt("Please Enter Your type", "regular".toLowerCase());

// let total = product_Price * quantity;

// let finalTotal = total;


// if (product_Price <= 0) {
//     alert("Please Enter Valid Price")
// } else if (quantity <= 0) {
//     alert("Please Enter a Valid Quantity");
// } else if (customer_Type === "") {
//     alert("Please Enter your type");
// } else if (customer_Type !== "Premium".toLowerCase() && customer_Type !== "Regular".toLowerCase()) {
//     alert("Please Enter type between regular and premium")
// } else {

//     if (customer_Type === "Premium".toLowerCase()) {
//         finalTotal = total * (90 / 100)
//     }

//     if (total >= 5000) {
//         alert("Total Amount is " + total);
//     } else if (total >= 2000 && total < 5000) {
//         alert("Total Amount is " + (total + 150));
//     } else {
//         alert("Total Amount is " + (total + 250));
//     }
// }

