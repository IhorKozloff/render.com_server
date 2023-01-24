require('dotenv').config()
const express = require('express');
const cors = require('cors');
const testRouter = require('./routes/testRoute');
const userRouter = require('./routes/userRoutes');
const coursesRouter = require('./routes/coursesRoutes');

const app = express();
const router = express.Router();


app.use(cors())
app.use(express.json())
app.use(express.static("src/public"))




app.use('/test', testRouter);

app.use('/user', userRouter);

app.use('/courses', coursesRouter);


app.use((req, res) => {
    console.log("my server error")
    res.status(404).json({
        message: "No Routes Matched"
    })
});
  
  
  
  app.use((err, req, res, next) => {
    const {status = 500, message = "Eyeshield Server Error"} = err;
  
    console.log(`Зара буде помилка з обробника помилок:`, message, status);
    res.status(status).json({ message })
  })

app.use('/test', router);

module.exports = app

