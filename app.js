const express = require('express');
// const connection = require('connect.js')
const port = 5000;
const app = express();
const mysql = require('mysql');

app.use(express.static('public'));

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ecom',
    port: 3308

}); 
connection.connect((err)=> {
    if (err) {
        return console.error('error' + err.message)
    } 

    console.log('Connected to the MYSQL Server. ');
});

app.post('/register.html', (req,res) => {
    const fname = req.body.fname;
    console.log('From registration')
}) 

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});