const app = require('./app')
const mongoose = require('mongoose');

const { PORT = 3005, MESSAGE, MONGO_URL } = process.env;

// mongoose
// .connect(MONGO_URL).then(app.listen(PORT, () => {
//         console.log(`${MESSAGE} ${PORT}!`);
//     }))

app.listen(PORT, () => {
    console.log(`${MESSAGE} ${PORT}!`);
})
