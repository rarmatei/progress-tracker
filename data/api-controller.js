const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const StudentSchema = new Schema({
    supjectName: {
        type: String,
        required: [true, 'Name field is required']
    },
    beforeClass: {
        type: Number
    },
    afterClass: {
        type: Number
    },
    monday: {
        type: Number
    },
    wednesday: {
        type: Number
    },
    thursday: {
        type: Number
    },
    friday: {
        type: Number
    }
});

const Topic = mongoose.model('topics', StudentSchema);

module.exports = Topic;
