const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const leads = require('./config/routes/api/leads');
const app = express();
const port = 3000;
const db = require('./config/db').mongoURI;

//Use body parser
app.use(bodyParser.json());

//Use routies
app.use('/api/leads', leads);

//Connect to Mongo db
mongoose
    .connect(db)
    .then(() => console.log('DB connected successfully'))
    .catch(error => console.log(error));

//Set up the port
app.listen(port, () => console.log(`Server running on port ${port}`));