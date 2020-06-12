const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('i am !!');
});

app.get('/data',(req,res)=>{
    
    const userData = {
        name:'Shanto',
        pro:'Developer'
    }

    res.send(userData);
});

// 404 error
app.get('*',(req,res)=>{
    res.send('Sorry Not Found 404!');
});
// server 
app.listen(3000,()=>{
    console.log('Hello boy!');
});