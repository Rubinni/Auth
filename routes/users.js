const express = require('express')
const router = express.Router();
const db = require('../database');
const app = express();

app.set('view engin', 'ejs');

router.post('/form', (req,res,next) => {
    res.render('../views/users');
})

router.post('/create', (req,res,next) => {
    //storing all user input data
    const userDetails = req.body;

    //insert user data into user table
    var sql = 'INSERT INTO users SET ?';
    db.query(sql, userDetails, (err,data) => {
        if (err) throw err;
            console.log('Users data inserted Successfully');

    });
    res.redirect('/users/form');
});

module.exports = router;