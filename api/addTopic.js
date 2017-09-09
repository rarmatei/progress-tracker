const express = require('express');
const router = express.Router();
const Topic = require("../data/api-controller");

router.post("/topics", function (req, res, next) {
    Topic.create(req.body).then(function (topic) {
        res.send(topic);
    }).catch(next);
})

module.exports = router;