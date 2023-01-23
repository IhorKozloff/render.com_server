const express = require('express');
const testRouter = express.Router();


testRouter.get('/', (req, res) => {
    res.json({
        'hello': 'hi!'
    })
})

module.exports = testRouter;