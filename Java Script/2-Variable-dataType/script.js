console.log(1);
console.log('Alert');
console.log(100,'Ateesh',true);
console.error('Alert');
console.warn('Warning');
console.table({Name:'Ateesh', Email:'ateesh2002@gmail.com'});
console.log(new Date());
console.group('Start');
console.log(100,'Ateesh',true);
console.error('Alert');
console.warn('W');
console.groupEnd();

// type conversion
let amount= '100';
amount = parseInt(amount);
amount = amount.toString();
console.log(amount,typeof amount);


// compehrision operators
let x = 2*2;
x = 2==2;
x= 2=='2'; //== compersion operator is not check the type only check tha data
x= 2==='2'; //=== compersion operator check the type
x= 2===2;
console.log(x);

//working with string

let name = "Ateesh";
let age = 21;
let detail = "the name of the student is "+name+' and the age is '+age;

detail = `The name of the student is ${name} and the age is ${age};`
console.log(detail);

//capitalize Challenge

let s = 'developer';
// s= s.replace('d','D');
//  s= s.toLocaleUpperCase();
// s = s.indexOf('d');
s1 = s.charAt(0).toUpperCase()+s.substring(1);
console.log(s1);
// Math operation applied
console.log(Math);
let y = Math.max(4,7,2);
y = Math.abs(-3);
y = Math.max(4,7);
y = Math.round(4.3);
y = Math.ceil(12.1);
y = Math.floor(13.9);
y = Math.pow(2,3);
y = Math.round(Math.random()*10+1);

console.log(y);

//Number Challenge
let a = Math.random()*100+1;
let b = Math.random()*50+1;
const sum = `${a} + ${b} = ${a+b}`;
const supperation = `${a} - ${b} = ${a-b}`;
const product = `${a} * ${b} = ${a*b}`;
const quetioent = `${a} / ${b} = ${a/b}`;
const remainder = `${a} % ${b} = ${a%b}`;
console.log(sum);
console.log(supperation);
console.log(product);
console.log(quetioent);
console.log(remainder);

//Time Stamp 
let d;
d = new Date();
d = d.toString();
d = new Date(2021,6,10);
d = new Date(2021,6,10, 12,30);
d = new Date('2021-06-10T12:12:30:00');
d = new Date('07/10/2021 12:30:00')
d = Date.now()
// d = d.getTime();

console.log(d);


//DateTimeFormat API
let p;
let e= new Date();
p = e.toString();
p = e.valueOf();
p = e.getTime();
p = e.getFullYear();
p = e.getDay();
p = e.getDate();
p = e.getMonth();
p = e.getHours();
p = e.getMinutes();
p = e.getMilliseconds();
p = e.getSeconds();

var g;
g= Intl.DateTimeFormat('en-US').format(d);
g= Intl.DateTimeFormat('en-GB').format(d);
g= Intl.DateTimeFormat('default').format(d);
g= Intl.DateTimeFormat('default',{month:'long'}).format(d);
g = d.toLocaleString('default',{
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minut: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
});
console.log(p);
console.log(g);
