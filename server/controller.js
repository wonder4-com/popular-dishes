const db = require('../database/index.js');

const getDishes = (request, response) => {
    var restaurant_id = request.query.restaurant_id;
    var query = 'SELECT * FROM PopularDishes WHERE restaurant =' + restaurant_id;
    db.query(query, (err, data) => {
        if (err) {
            response.status(400).send('bad request');
        } else {
            response.send(data);
        }
    });
}

const getPhotos = (request, response) => {
    var dish_id = request.query.dish_id;
    var query = 'SELECT * FROM photos WHERE popular_dish =' + dish_id;
    db.query(query, (err, data) => {
        if (err) {
            response.status(400).send('bad request');
        } else {
            response.send(data);
        }
    });
}


module.exports = { getDishes, getPhotos }