const express = require('express');
const router = express.Router();
const Topic = require("../models/topic");

router.delete("/topics/:id", function (req, res, next) {
    Topic.findByIdAndRemove({_id: req.params.id}).then(function (topic) {
        res.send(topic)
    })
})

module.exports = router;