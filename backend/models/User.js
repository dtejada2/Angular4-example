var mongoose = require('mongoose')

module.exports = mongoose.model('model',{
    Email: String,
    password: String
})