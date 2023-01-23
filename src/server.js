const app = require('./app')
const mongoose = require('mongoose');

const { PORT = 3005, MESSAGE, MONGO_URL } = process.env;

mongoose
.connect(MONGO_URL)
    .then(app.listen(PORT, () => {
        console.log(`${MESSAGE} ${PORT}!`);
    }))
    // .then(() => {
    //     console.log(`Database connected`)
    //     console.log(`Server run on port ${PORT}`)
    // })
    // .catch(() => () => {
    //     console.log(`Не запустилось ничего, ошибка какая-то`)
    //     // console.log(error)
    //     // process.exit(1)
    // });

