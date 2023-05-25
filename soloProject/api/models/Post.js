const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PostSchema = new mongoose.Schema({
    titlename: {type: String, required: true},
    date: {type: Date, required: true},
    author: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String},
    auther: {type: String},
})

const PostModel = model('Post', PostSchema)

module.exports = PostModel