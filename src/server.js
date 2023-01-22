const app = require('./api')

const { PORT = 3005 } = process.env;

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});