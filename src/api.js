require('dotenv').config()
const express = require('express');


const app = express();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'hello': 'hi!'
    })
})

app.use('/test', router);

module.exports = app

