const arr = [12,14,13,5,6];
console.log(arr);
const arr1 = new Array('orange','apple','lemon','mango');
console.log(arr1);
let x;
// arr.push(15);
// arr.pop();
// arr.unshift(99);
// arr.shift();
// arr.reverse();

// x = arr.indexOf(14);
// x =arr.includes(14);
x = arr.slice(1,3);
x = arr.slice(1,3).reverse().toString().charAt(1);
console.log(arr);
console.log(x);

//Nesting and concat spread operator
let y;
const fruit = ['apple','pear','orange'];
const berries = ['strawberry','blueberry','rasberry'];
// fruit.push(berries);
const allFruits = [fruit,berries];
// y = allFruits[0];
y = fruit.concat(berries);
y = [...fruit,...berries];
console.log(y); 

//object cteation

// const persion = {
//     name:'ateesh kuamr',
//     age: 21,
//     isAdmin: true,
//     address:{
//         street:'123 xyz',
//         city: 'Bosten',
//         state: 'MA',
//     },
//     hobbis:['music','sport'],
// };
// let z = persion.address;
// console.log(persion);

// //Array object and method
// const obj1 = {a:1,b:2};
// const obj2 = {c:1,d:2};

// // console.log(...obj1,...obj2);

// const todos = [
//     {id:1, Name:"ateesh"},
//     {id:2,Name:"ateesg"},
// ];
// let p= todos[1].Name; 
// let p1= todos[1].id; 
// console.log(p1);


// //distructor
// const fristName = 'Ateesh';
// const lastName = 'Kumar';
// const age = 20;

// const todo={
//     fristName:fristName,
//     lastName:lastName,
//     age:age,
// }
// console.log(todo);

// //Distructor of array
const arr4 = [12,13,14,15,16,17];
const [...rest]=arr4;
console.log(rest);
console.log(arr4);
