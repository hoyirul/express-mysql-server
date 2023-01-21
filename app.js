require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

const appRoute = require('./src/routes/routes');
app.use('/', appRoute);

const exampleRoute = require('./src/routes/example.route');
app.use('/api', exampleRoute);

app.listen(PORT, () => {
    console.log('Server is running with port : ', `${PORT}`);
});