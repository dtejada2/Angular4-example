var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var jwt = require('jwt-simple')

var app = express()

var User = require('./models/User.js')
var Post = require('./models/Post.js')
var auth = require('./auth.js')

mongoose.Promise = Promise

app.use(cors())
app.use(bodyParser.json())

function checkAuthenticated(req, res, next) {
    if(!req.header('authorization'))
        return res.status(401).send({message: 'Unauthorized Auth Header'})

    var token  = req.header('authorization').split(' ')[1]

    var payload =  jwt.decode(token, '123')

    if(!payload)
        return res.status(401).send({message: 'Unauthorized Auth Invalid'})

    req.userId = payload.sub

    next()
}

app.get('/posts/:id', async (req,res) => {
    var author= req.params.id
    var posts = await Post.find({author})
    res.send(posts)
})

app.post('/post', (req,res) => {
    var postData = req.body
    postData.author = '5a62030340ba330b3c30ba59';

    var post = new Post(postData)

    post.save((err, result) => {
        if (err){
            console.error('save post error')
            return res.status(500).send({message: "saving post error" })
        }
        
        res.sendStatus(200);
    })
})

app.get('/users',auth.checkAuthenticated, async (req,res) => {
    try {
        console.log(req.userId)
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

mongoose.connect('mongodb://dtejada:Daniel89@ds261917.mlab.com:61917/pssocial',{useMongoCLient: true}, (error)=>{
    if(!error)
        console.log('connected to mongo')
})

app.use('/auth', auth.router)

app.listen(3000)