const post ={
    id:1,
    title:'post one',
    body:'this is the body',
};
//convert into JSON string
const str = JSON.stringify(post);
// it convert JSON Stirng to object
const obj = JSON.parse(str);
console.log(obj);

const posts= [
    {
    id:1,
    title:'post one',
    body:'this is the body', 
    },
    {
    id:1,
    title:'post one',
    body:'this is the body', 
    },
    {
    id:1,
    title:'post one',
    body:'this is the body', 
    },
];
const str2 = JSON.stringify(posts);
console.log(str2)



//Challenges
const library = {
    title:"Reach Dad",
    outhor:"Rechard",
    status:{
        own:true,
        reading:false,
        read:false,
    },
}
library.status.read= true;

const {title:fristbook}= library;
console.log(library);
const js = JSON.stringify(library);
console.log(js);
