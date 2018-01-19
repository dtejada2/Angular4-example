var mongoose = require('mongoose');

module.exports = mongoose.model('Posts', {
    msg: String
})