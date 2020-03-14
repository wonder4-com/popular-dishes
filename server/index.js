const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const companyNumber = 10; // this is how many companies there are;
const controller = require('./controller.js');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist/')))

app.get('/getCompany', (req, res) => {
    var companyId = Math.floor(Math.random() * companyNumber) + 1;
    res.send(companyId.toString());
})

app.get('/getItems', (req, res) => {
    controller.getDishes(req, res);
});

app.get('/getPhotos', (req, res) => {
    console.log(req.query);
    controller.getPhotos(req, res);
})

app.listen(port, () => {
    console.log('server is running on', + port)
})