const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Schema = mongoose.Schema;

// create progres Schema
const ProgressSchema = new Schema({
    supjectName: {
        type: String,
        required: [true, 'Name field is required']
    },
    beforeClass: {
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

// create ninja Schema & model
const StudentSchema = new Schema({
    studentName: {
        type: String,
        required: [true, 'Name field is required']
    },
    progressSchudle: ProgressSchema
});

const Student = mongoose.model('student', StudentSchema);


router.post("/api/student", function (req, res, next) {
    Student.create(req.body).then(function (student) {
        res.send({
            studentName: req.body.studentName,
            supjectName: req.body.progressSchudle.supjectName,
            beforeClass: req.body.progressSchudle.beforeClass,
            monday: req.body.progressSchudle.monday,
            wednesday: req.body.progressSchudle.wednesday,
            thursday: req.body.progressSchudle.thursday,
            friday: req.body.progressSchudle.friday
        });
    }).catch(next);
})

router.put("/api/student/:id", function (req, res, next) {
    Student.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Student.findOne({ _id: req.params.id }).then(function (student) {
            res.send({
                studentName: req.body.studentName,
                supjectName: req.body.progressSchudle.supjectName,
                beforeClass: req.body.progressSchudle.beforeClass,
                monday: req.body.progressSchudle.monday,
                wednesday: req.body.progressSchudle.wednesday,
                thursday: req.body.progressSchudle.thursday,
                friday: req.body.progressSchudle.friday
            });
        });
    }).catch(next);
})

module.exports = router;