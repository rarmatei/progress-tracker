const mongoose = require('mongoose');
const { Schema } = mongoose;

// I think we still need the following fields: beforeClass, afterClass, friday, and title.
const schema = new Schema({
    subjectName:{
        type:String,
        require
    },
    beforeclass: Number,
    afterClass: Number,
    monday: Number,
    tuesday : Number,
    wednesday: Number,
    thursday: Number,
    friday: Number 
});

const topic = mongoose.model('topic',schema);

module.exports = topic;