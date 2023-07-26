const express = require('express');

const routes = express.Router();
routes.get('/',(req,res)=>{
    res.send('hello world');
});
routes.post('/',(req,res)=>{
    res.send('Post Success');
});

module.exports = routes;