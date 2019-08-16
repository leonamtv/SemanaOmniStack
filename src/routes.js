const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ ok : true});
});

routes.post('/devs', (req, res) => {
    console.log(req.body)
    return res.json({ ok : true});
});

let exp = require("express");

const DevController = require('./controller/DevController')
const LikeController = require('./controller/LikeController')
const DislikeController = require('./controller/DislikeController')
const router = exp.Router();

router.get('/devs', DevController.index);
router.post('/devs', DevController.store);
router.post('/devs/:devId/likes', LikeController.store);
router.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = router;