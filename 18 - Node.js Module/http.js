const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    // console.log(req.url);

    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.end('<h1>Hello World</h1>');
    }

    res.end('Hello world');
})

server.listen(5000,()=>{
    console.log("Server is listining at port 5000");
})