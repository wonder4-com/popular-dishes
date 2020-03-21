const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const companyNumber = 1; // this is how many companies there are;
const controller = require('./controller.js');
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist/')))

app.get('/getCompany', (req, res) => {
    var companyId = Math.floor(Math.random() * companyNumber) + 1;
    controller.getCompany(companyId, res);
})

app.get('/getItems', (req, res) => {
    controller.getDishes(req, res);
});

app.get('/getPhotos', (req, res) => {
    console.log(req.query);
    controller.getPhotos(req, res);
})

app.get('/arrow.png', (req, res) => {
    res.sendFile('/Users/alexchung/Documents/HackReactor2020/popular-dishes/server/arrow.png');
});

app.get('/leftarrow.png', (req, res) => {
    res.sendFile('/Users/alexchung/Documents/HackReactor2020/popular-dishes/server/leftarrow.png');
});

app.get('/getReviews', (req, res) => {
    controller.getReviews(req, res);
})





app.listen(port, () => {
    console.log('server is running on', + port)
})