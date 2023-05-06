function print(){
    console.log("Hello World");
}
print();

function sum(a,  b){
    console.log(a+b);
}
sum(5,6);
function sub(c,d){
    return d-c;
}

const result = sub(2,4);
console.log(result);


//special function
function register(user){
    return user+ ' is Registered';
}
function register1(user='bot'){
    // if(!user){
    //     user = 'bot';
    // }
    return user+ ' is Registered';
}
console.log(register1());

function sumetion(...som){
    let total = 0;

    for (const key of som) {
        total+=key;
    }
    return total;

}
console.log(sumetion(1,2,3,4,5));

//special type
function loginUser(user){
    return `the user id is ${user.id} and the name of the user is ${user.name}`;

}
const user={
    id:1,
    name:"ateesh",
};
console.log(loginUser(user));
console.log(loginUser({
    id:2,
    name:'Vikas',
}));

function randomarray(arr){
    const randomIndex = Math.floor(Math.random()* arr.length);
    const item = arr[randomIndex];
    console.log(item);
}
randomarray([1,2,3,4,5,6,7,8,9,10]);


//Function Declaration
// function addDollarSign(value){
//     return '$'+ value;
// }
// console.log(addDollarSign(100));

//Function Expression

const addDollarSign = function (value){
    return '+'+value;
}

//Arrow Functions
const add = (a,b)=>{
    return a+b;
};

// Implicit return
const subtract = (a,b)=> a-b;

const double = a=>a*2;

// retruning an object

const crtObj = ()=>({
    name:'Ateesh',
});
console.log(crtObj());


//  challenges first
// convert farenhite to celcious
const getCelcious = f=>{
    // let y = 
    let x= (f-32)*(5/9);
    return x;
};

console.log(getCelcious(100));

//create min and max value in array;

const minMAX = (arg)=>{
    let max = Math.max(...arg);
    let min = Math.min(...arg);
    return `The max value of the array is ${max} and the minimum value is ${min}`;

};
console.log(minMAX([12,4,62,89,34,2,8]));

//calculate the area of the rectengle

const area = (length,width)=> (length*width);
console.log(area(12,12));