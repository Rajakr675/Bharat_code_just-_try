const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/',(req,res) => {
    res.send('<h1>loudiya raja</h1>')
});

app.get('/products',(req,res) => {
    res.send('<h1>gandu raja</h1>')
});

app.get('/users',(req,res) => {
    res.send('<h1>chutiya raja</h1>')
});

app.listen(PORT,console.log(`server started on port ${PORT}`));