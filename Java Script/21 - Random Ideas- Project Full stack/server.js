const server = require('express');
const port = 5000;

const app = server();



app.listen(port,()=>console.log(`Server Listening at port ${port}`));