const app = require('./api')

const { PORT = 3005 } = process.env;

app.listen(PORT)