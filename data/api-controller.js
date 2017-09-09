const express = require('express');
const router = express.Router();



router.post("/api/topics", function (req, res, next) {
    topics.create(req.body).then(function (topics) {
        res.send({
            supjectName: req.body.supjectName,
            beforeClass: req.body.beforeClass,
            afterClass: req.body.afterClass,
            monday: req.body.monday,
            tuesday: req.body.tuesday,
            wednesday: req.body.wednesday,
            thursday: req.body.thursday,
            friday: req.body.friday
        });
    }).catch(next);
})

router.put("/api/topics/:id", function (req, res, next) {
    topics.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        topics.findOne({ _id: req.params.id }).then(function (topics) {
            res.send({
                supjectName: req.body.supjectName,
                beforeClass: req.body.beforeClass,
                afterClass: req.body.afterClass,
                monday: req.body.monday,
                tuesday: req.body.tuesday,
                wednesday: req.body.wednesday,
                thursday: req.body.thursday,
                friday: req.body.friday
            });
        });
    }).catch(next);
})

module.exports = router;