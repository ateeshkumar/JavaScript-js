const posts=[
    {title:"Post one", body:"This is post one"},
    {title:"Post two", body:"This is post two"},
    {title:"Post three", body:"This is post three"},
    {title:"Post four", body:"This is post four"},
]
// function createPost(post,cb){
//     setTimeout(()=>{
//         posts.push(post);
//         cb();
//     },2000);
// }
// function createPost(post){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             resolve();
//         },2000);
//     })
// }
function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true;
            if(!error){
                posts.push(post);
                resolve();
            }else{
                reject("Something went wrong!!");
            } 
        },2000);
    })
}
function getPost(){
    setTimeout(()=>{
        posts.forEach(function(post){
            const div = document.getElementById('local');
            div.innerHTML = `<strong>${post.title}</strong>-${post.body}`;
        })
    },1000);
}
function showError(error){
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong>${error}</strong>`;
    document.getElementById('local').appendChild(h3);
}

// createPost({title:"Post four", body:"This is post four"},getPost);
createPost({title:"Post four", body:"This is post four"}).then(getPost).catch(showError);
