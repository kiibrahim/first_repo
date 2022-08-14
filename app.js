const express = require('express')
const bodyParser = require('body-parser')

const app =express()

app.use(bodyParser.json())
app.post('/register', (req, res)=>{
    res.send({
        message: `Hello ${req.body.email}! You are registered now!`
    })
})

app.listen(process.env.PORT || 5000)