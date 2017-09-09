const mongoose = require('mongoose');
const { Schema } = mongoose;

// I think we still need the following fields: beforeClass, afterClass, friday, and title.
const schema = new Schema({
    afterClass: Number,
    monday: Number,
    wednesday: Number,
    thursday: Number,
    friday: Number,
    beforeclass: Number
});

const topic = mongoose.model('topic',schema);

module.exports = topic;