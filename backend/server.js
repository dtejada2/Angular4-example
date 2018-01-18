var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var jwt = require('jwt-simple')
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

app.get('/users', async (req,res) => {
    try {
        var users = await User.find({}, '-password -__v')
        res.send(users)
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
})

app.get('/profile/:id', async (req,res) => {
    try {
        var user = await User.findById(req.params.id, '-password -__v')
        res.send(user)
    } catch (error) {
        console.error(error);
       res.sendStatus(500);
    }
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

app.post('/login', async  (req,res) => {
    var userData = req.body;

    var user = await User.findOne({Email: userData.Email})

    if(!user)
        return res.status(401).send({message: "Email or Password invalid"})

    if(userData.password != user.password)
        return res.status(401).send({message: "Email or Password invalid"})

    var payload = {}

    var token = jwt.encode(payload, '123', );

    res.status(200).send({token: token});
})

mongoose.connect('mongodb://dtejada:Daniel89@ds261917.mlab.com:61917/pssocial',{useMongoCLient: true}, (error)=>{
    if(!error)
        console.log('connected to mongo')
})
app.listen(3000)