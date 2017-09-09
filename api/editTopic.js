const express = require('express');
const router = express.Router();
const Topic = require("../data/api-controller");

router.put("/topics/:id", function (req, res, next) {
    Topic.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        Topic.findById({ _id: req.params.id }, function (error, topic) {
            res.send(topic)
        }).catch(next);
    }).catch(next);
})

module.exports = router;