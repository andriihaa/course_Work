const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');

const url = "mongodb://localhost:27017/hospital";

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('hello')
})


const mongoose = require("mongoose");
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


app.use('/api/sp', require('./routes/specialization'));
app.use('/api/doctor', require('./routes/doctor'));
app.use('/api/customRecord', require('./routes/customRecord'));
app.use('/api/singleRecord', require('./routes/singleRecord'));

app.listen(3000, () => {
    console.log(3000);
});
