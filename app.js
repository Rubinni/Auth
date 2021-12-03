const express = require('express');
const app = express();
const usersRouter = require('./routes/users');
const port = 3000;

app.set('view engine', 'ejs')

// const router = express.Router();
// const db = require('./database')


// app.use(express.static('public'));

// router.post('/form', (req,res,next) => {
//     res.render('users')
// });

// router.post('/creat', (res,req,next) => {

// });

app.use('users', usersRouter);

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
});


