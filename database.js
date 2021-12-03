const mysql = require('mysql');

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ecom',
    port: 3308

}); 

conn.connect((err)=> {
    if (err) {
        return console.error('error' + err.message)
    } 

    console.log('Connected to the MYSQL Server. ');
});

module.exports = conn;