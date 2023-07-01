const fs = require('fs/promises');
// wirte a file

// fs.writeFile('file.txt','Hello World',(err)=>{
    // if(err) console.log(err);
//     console.log("File Created");
// });

// promises version
// fs.writeFile('file1.txt','Hello World')
// .then(()=>console.log("File Created"))
// .catch((err)=>console.log(err));

// syncronuous version

// fs.writeFileSync('file2.txt','Hello World');
// console.log("File created");

// async / await
 const fileSys = async (filename, content)=>{
    try {
        await fs.writeFile(filename,content);
        console.log("File Created");
    } catch (error) {
        console.log(error);
    }
 }

 fileSys('text.txt','helllo world');