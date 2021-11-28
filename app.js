const express = require('express')
const port = 5000
const app = express()

app.use(express.static('public'))


app.get('/', (req,res) => {
    
})

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})