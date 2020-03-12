const express = require('express');
const app = express();
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const port = 3000;

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../client/dist/')))

// app.get('/movies', (req, res) => {
//     Controller.get(req, res);
// })

// app.post('/movies', (req, res) => {
//     console.log(req.body);
//     Controller.post(req, res);
// })

// app.put('/click', (req, res) => {
//     Controller.update(req, res);
// })

app.listen(port, () => {
    console.log('server is running on', + port)
})