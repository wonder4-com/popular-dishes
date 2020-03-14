const db = require('./index.js');
const faker = require('faker');
const axios = require('axios');

// how many companies do we want to be made
const numberOfCompanies = 10;

// maxDishes in a company
var maxDishes = 10;

// Max number of reviews per dish
var maxReviews = 10;

// max number of photos per dish
var maxPhotos = 40;

// function for making one company
const makeCompany = () => {
    return new Promise ((resolve, reject) => {
        var params = [faker.company.companyName()]
        var query = 'INSERT INTO Restaurants (restaurant_name) values(?)'
        db.query(query, params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    })
}

// function for making one dish
const makeDish = (addDish, params) => {
    return new Promise((res, rej) => {
        db.query(addDish, params, (err, data) => {
            if (err) {
                rej(err)
            } else {
                res(data)
            }
        })
    })
};

// function for making one photo
const makePhoto = (addPhoto, photoParams) => {
    return new Promise ((res, rej) => {
        db.query(addPhoto, photoParams, (err) => {
            if (err) {
                rej(err)
            } else {
                res();
            }
        })
    })
};

const generateData = () => {
    for (var i = 0; i < numberOfCompanies; i++) {
        makeCompany()
        .then(data => {
            // after making one company we get it's restaurantid
            var restaurantId = data.insertId;
            console.log('made restaurant with restaurant_id', restaurantId)
            for (var i = 0; i < maxDishes; i++) {
                var params = [faker.lorem.word(), faker.random.number(), faker.lorem.words(), Math.round(Math.random() * maxReviews), restaurantId]
                var addDish = 'INSERT INTO PopularDishes (dish_name, price, description, review_count, restaurant) values (?,?,?,?,?)';
                // then we make multiple dishes with the restaurantid as it's foreign key
                makeDish(addDish, params)
                .then(data => {
                    console.log('made dishes for restaurant with id', restaurantId)
                    var dish_id = data.insertId;
                    var urlStart = 'https://loremflickr.com/1920/1080/';
                    var urlTwo = urlStart + params[0];
                    for (var o = 0; o < Math.floor(Math.random() * maxPhotos) + 1; o++) {
                        var addPhoto = 'INSERT INTO photos (url, caption, popular_dish) values (?,?,?)';
                        // then we make a get request to lorem flickr
                        axios.get(urlTwo)
                        .then(data => {
                            // we get back a photo, but what we want is the url that we were redirected to
                            var responseUrl = data.request.res.responseUrl;
                            var photoParams = [responseUrl, faker.lorem.words(), dish_id];
                            // then we use that url from the response the url for a photo
                            makePhoto(addPhoto, photoParams)
                            .then(() => console.log('made photos for dish with an id of', dish_id))
                        })
                        .catch(err => console.log(err))
                    } 
                }
                );
            }
        })  
    }
}

generateData();

var selectiveQuery = 'SELECT a.*, b.* FROM PopularDishes a INNER JOIN Restaurants b ON a.restaurant = b.restaurant_id WHERE a.restaurant = 1';
var selectPhotos = 'SELECT a.*, b.* FROM photos a INNER JOIN PopularDishes b ON a.popular_dish = b.dish_id WHERE a.popular_dish = 5';


// var query = 'SELECT * FROM PopularDishes INNER JOIN Restaurants ON PopularDishes.restaurant = Restaurants.restaurant_id'; // get table of popular dishes and restaurants joined at restaurant id

module.exports = numberOfCompanies;