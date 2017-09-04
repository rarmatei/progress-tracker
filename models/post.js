const mongoose = require('mongoose');
const { Schema } = mongoose;
//const schema =mongoose.schema;

const schema = new Schema({
    title: String,
    contents: String,
    summary: String
});

const Post = mongoose.model('posts', schema);

module.exports = Post;


//I Create a mongoose model for Topic.//