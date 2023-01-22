const app = require('./api')

const { PORT = 3005, MESSAGE } = process.env;

app.listen(PORT, () => {
    console.log(`${MESSAGE} ${PORT}!`);
});