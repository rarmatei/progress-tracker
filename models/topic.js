const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    afterClass: Number,
    monday: Number,
    wednesday: Number,
    thursday: Number
});

const topic = mongoose.model('topic',schema);

module.exports = topic;