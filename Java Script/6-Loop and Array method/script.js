//print 1- 100
for (let i = 1; i <=100 ; i++) {
    console.log(i);
}
for (let i = 1; i <=100 ; i = i*5) {
    console.log(i);
}

// for of loop
const items = ['Bag','Apple','Mangos','Bike','car'];
for (const item of items) {
    console.log(item);
}

const users = [{name:'Mohan'},{name:'Harish'},{name:'Vikash'},{name:'Bhoju'}];
for (const user of users) {
    console.log(user.name);
}
const str = "Ateesh Kumar";
for (const i of str) {
    console.log(i);
}

//map 
const map = new Map();
map.set('name','Ateesh');
map.set('age',20);

for (const [key,value] of map) {
    console.log(key,value);
}

// for in loop
const colorObj={
    color1:'Red',
    color2:'Blue',
    color3:'yellow',
    color4:'Lemon',
    color5:'Black',
};
for (const key in colorObj) {
    console.log(key,colorObj[key]);
        
}
const colorArr=['Blue','yellow','red','black'];
for (const key in colorArr) {
    console.log(key,colorArr[key]);
}


//array filter 
const nums = [1,2,3,4,5,6,7];
// const even=nums.filter((function (nums){

// });
const fun = nums.filter((nums)=> nums %2==0);
console.log(fun);


// array Map
const map1 = [1,2,3,4,5];
const map2 = map1.map((map1)=>map1*2);
console.log(map2);

// reduce array

const sum = map1.reduce(function( accumulator, currentValue){
    return accumulator+currentValue;
},0);
console.log(sum);

const cart=[
    {id:1,name:"product 1",price:130},
    {id:2,name:"product 2",price:150},
    {id:3,name:"product 3",price:180},
];
const total = cart.reduce(function(acc,curr){
    return acc+curr.price;
},0);
console.log(total);