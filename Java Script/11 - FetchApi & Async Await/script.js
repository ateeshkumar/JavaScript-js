//fetch json
fetch('film.json')
.then((res)=>res.json())
.then((data)=>console.log(data));

//fetch txt file
fetch('text.txt')
.then((res)=>res.text())
.then((data)=>{
    setTimeout(()=>{
        document.querySelector('h1').textContent= data;
    },2000);
});

//Fetch from an api
fetch('https://api.github.com/users/ateeshkumar/repos')
.then((res)=>res.json())
.then((data)=>console.log(data));


// create post request with fake api

function createPost({title,body}){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers:{
            'Content-Type':'application/json',
            token:'abc123',
        },
    })
    .then((res)=>res.json())
    .then((post)=>console.log(post));
}
 createPost({title:'My Post', body:'This is my Posts'});

 //Async & Await function
 const promises = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({Name:"Ateesh Kumar", Uid:"20BCS3779"});
    },1000);
 });
 promises.then((data)=>{
    console.log(data);
 });
 async function getResponce(){
    const res = await promises;
    console.log(res);
 }
 getResponce();

 async function gitUser(){
    const res = await fetch('https://api.github.com/users');
    const data =await res.json();
    console.log(data);
 }
 gitUser();

 function gitUser1(){
    fetch('https://api.github.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data));
 }
 gitUser1()

 const gitUser2 = async() =>{
    const res = await fetch('https://api.github.com/users');
    const data =await res.json();
    console.log(data);
 }
 gitUser2()

//  error handiling with asyncs and await

//  const gitUser4=async () => {
//     try{
//     const res = await fetch('https://ap.github.com/users');
//     const data =await res.json();
//     console.log(data);
//     }catch(e){
//         alert(e);
//     }
//  }
//  gitUser4()


