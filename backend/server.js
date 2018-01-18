var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

var User = require('./models/User.js')

var posts = [
    {message: 'hello'},
    {message: 'hi'}
]

app.use(cors())
app.use(bodyParser.json())

app.get('/posts', (req,res) => {
    res.send(posts)
})

app.post('/register', (req,res) => {
    var userData = req.body;
    var user = new User(userData)
    user.save((err,result)=>{
        if(err)
            console.log('save user error')
            
        res.sendStatus(200);
    })
})

mongoose.connect('mongodb://dtejada:Daniel89@ds261917.mlab.com:61917/pssocial',{useMongoCLient: true}, (error)=>{
    if(!error)
        console.log('connected to mongo')
})
app.listen(3000)