var mongoose = require('mongoose');

module.exports = mongoose.model('Posts', {
    msg: String,
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
})