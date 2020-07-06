const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('i am !!');
});

app.get('/data',(req,res)=>{
    
    const userData = {
        "Name":'Shanto'
    }

    res.send(userData);
});
// bus seats

app.get('/seat',(req,res)=>{
    const busSeats = {
        "id": 2,
        "trip_id": 3,
        "a1": 1,
        "a2": 0,
        "a3": 1,
        "a4": 0,
        "b1": 1,
        "b2": 0,
        "b3": 1,
        "b4": 0,
        "c1": 1,
        "c2": 1,
        "c3": 0,
        "c4": 0,
        "d1": 1,
        "d2": 0,
        "d3": 0,
        "d4": 0
    }
    res.send(busSeats);
});
// 404 error
app.get('*',(req,res)=>{
    res.send('Sorry Not Found 404!');
});
// server 
app.listen(3000,()=>{
    console.log('Hello boy!');
});