const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/',(req,res) => {
    res.send('<h1>HOME</h1>')
});

app.get('/products',(req,res) => {
    res.send('<h1>YAHA PRODUCTS HAI</h1>')
});

app.get('/users',(req,res) => {
    res.send('<h1>Yaha users nahi hai bhak saale</h1>')
});

app.listen(PORT,console.log(`server  started on port ${PORT}`));
