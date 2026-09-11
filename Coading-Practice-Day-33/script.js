// let numbers = [10, 20, 30, 40, 50];

// let total = numbers.reduce(function(accummulator, currentValue) {
//     return accumulator + currentValue;
// },0);

// let arrayTotal = total;
// console.log(arrayTotal);

// let numbers = [5, 10, 15, 20, 25];

// let total = numbers.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
// },0);

// console.log(total);

// let prices = [500, 1200, 300, 800];

// let totalPrice = prices.reduce(function(accumulator,currentValue){
//     return accumulator + currentValue
// })

// console.log(totalPrice);

// let students = [
//     {name: "Ali", marks: 80},
//     {name: "Ahmed", marks: 70},
//     {name: "Usman", marks: 90}
// ];

// let totalMarks = students.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.marks;
// },0)

// console.log(totalMarks);

// let cart = [
//     {name: "Burger", price: 500, quantity: 2},
//     {name: "Pizza", price: 1200, quantity: 1},
//     {name: "Drink", price: 200, quantity: 3}
// ];

// let totalPrice = cart.reduce(function(accumulator,currentValue){

//     let totalAmmout = currentValue.price * currentValue.quantity;
//     return accumulator + totalAmmout;
// },0)

// console.log(totalPrice);


// let numbers = [7, 1, 7, 3, 1, 7, 2, 3];
// let maxcount = 0;
// let mostfrquency = 0;

// for(let i = 0; i < numbers.length; i++){
//     let count = 0;

//     for(let j = 0; j < numbers.length; j++){
//         if (numbers[i] === numbers[j]) {
//             count++
//         }
//     }
//     if (count > maxcount) {
//         maxcount = count;
//         mostfrquency = numbers[i];
//     }
// }

// console.log(maxcount);
// console.log(mostfrquency);


// let numbers = [4, 2, 4, 5, 2, 4, 3];
// let maxcount = 0;
// let mostfrquency = 0;

// for(let i = 0; i < numbers.length; i++){
//     let count = 0;
//     for(let j = 0; j < numbers.length; j++){
//         if (numbers[i] === numbers[j]) {
//             count++
//         }
//     }

//     if (count > maxcount) {
//         maxcount++;
//         mostfrquency = numbers[i];
//     }
// }

// console.log(maxcount);
// console.log(mostfrquency);

// let numbers = [1, 5, 2, 5, 3, 1, 5, 2, 2];
// let maxcount = 0;
// let mostfrquency = 0;

// for(let i = 0; i < numbers.length; i++){
//     let count = 0;
//     for(let j = 0; j < numbers.length; j++){
//         if (numbers[i] === numbers[j]) {
//             count++
//         }
//     }

//     if (count > maxcount) {
//         maxcount++;
//         mostfrquency = numbers[i];
//     }
// }

// console.log(maxcount);
// console.log(mostfrquency);

// let numbers = [10, 20, 10, 30, 20, 10, 40, 30, 20, 20];
// let maxcount = 0;
// let mostfrquency = 0;

// for(let i = 0; i < numbers.length; i++){
//     let count = 0;
//     for(let j = 0; j < numbers.length; j++){
//         if (numbers[i] === numbers[j]) {
//             count++
//         }
//     }

//     if (count > maxcount) {
//         maxcount++
//         mostfrquency = numbers[i]
//     }
// }

// console.log(maxcount);
// console.log(mostfrquency);

// let products = [
//     {name: "Burger", category: "Food"},
//     {name: "Pizza", category: "Food"},
//     {name: "Cola", category: "Drink"},
//     {name: "Fries", category: "Food"},
//     {name: "Water", category: "Drink"},
//     {name: "Juice", category: "Drink"},
//     {name: "Pasta", category: "Food"}
// ];

// let maxcount = 0;
// let mostfrquency = 0;

// for(let i = 0; i < products.length; i++){
//     let count = 0;
//     for(let j = 0; j < products.length; j++){
//         if (products[i].category === products[j].category) {
//             count++
//         }
//     }

//     if (count > maxcount) {
//         maxcount++
//         mostfrquency = products[i].category;
//     }
// }

// console.log(maxcount);
// console.log(mostfrquency);

