const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const appRoute = require('./src/routes/routes');
app.use('/', appRoute);

app.listen(PORT, () => {
    console.log('Server is running with port : 3000');
});