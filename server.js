import express from 'express';

const app =express();

app.get('/', (req,res) => {
    req.setEncoding('Hello world');
});

app.listen(3000,()=>{
    console.log('server is running on the port 3000');
});
