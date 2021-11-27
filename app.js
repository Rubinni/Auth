const express = require('express')

const app = express()
app.use(express.static('public'))


app.get('/', (req,res) => {
    
})

app.listen(5000, () => {
    console.log('Server Running on Port 5000');
})