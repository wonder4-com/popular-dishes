const db = require('./index.js');
const faker = require('faker');
// creating restaurants/companies
const numberOfCompanies = 10
for (var i = 0; i < numberOfCompanies; i++) {
    var params = [faker.company.companyName()]
    var query = 'INSERT INTO Restaurants (restaurant_name) values(?)'
    db.query(query, params, () => {
        console.log('loaded restaurant names');
    });
}

// Max reviews = 20
var maxReviews = 20;
// max photos = 20;
var maxPhotos = 20;

// creating the popular dishes
for (var i = 0; i < 100; i++) {
    // parameters consist of
    //name, price, description, review_count, restaurant
    var params = [faker.lorem.word(), faker.random.number(), faker.lorem.words(), Math.round(Math.random() * maxReviews), Math.round(Math.random()* numberOfCompanies)]
    var addDish = 'INSERT INTO PopularDishes (dish_name, price, description, review_count, restaurant) values (?,?,?,?,?)';
    db.query(addDish, params, () => {
        console.log('loaded popular dishes names');
    })

    var addPhoto = 'INSERT INTO photos (url, caption, popular_dish) values (?,?,?)'
    var urlStart = 'https://loremflickr.com/1920/1080/';
    for (var o = 0; o < Math.floor(Math.random() * maxPhotos); o++) {
        var photoParams = [urlStart + params[0], faker.lorem.words(), i + 1];
        db.query(addPhoto, photoParams, () => {
            console.log('added random amount of photos');
        })
    }
}

// var selectiveQuery = 'SELECT a.*, b.* FROM PopularDishes a INNER JOIN Restaurants b ON a.restaurant = b.restaurant_id WHERE a.restaurant = 1';
// // string for a large photo
// var urlStart = 'https://loremflickr.com/1920/1080/';
// var getAllDishesNames = 'select dish_id, dish_name from PopularDishes'

// db.query(getAllDishesNames, (err, data) => {
//     if (err) {throw err}
//     for (var i = 0; i < data.length; i++) {
//         var popular_dish_id = data[i].dish_id;
//         console.log(data[i].dish_name);
//         var url = urlStart + data[i].dish_name;
//         var caption = faker.lorem.words();
//         var params = [url, caption, popular_dish_id];
//         var query = 'INSERT INTO photos (url, caption, popular_dish) values (?,?,?)'
//         for (var i = 0; i < Math.floor(Math.random()*maxPhotos); i++) {
//             db.query(query, params, () => {
//                 console.log('there should be photos now');
//             })
//         }
//     }
// })
// // create the photos
// for (var i = 0; i < 100; i++) {
//     // parameters consist of
//     //url, caption, popular_dish .... id
//     var params = []
// }

// var query = 'SELECT * FROM PopularDishes INNER JOIN Restaurants ON PopularDishes.restaurant = Restaurants.restaurant_id'; // get table of popular dishes and restaurants joined at restaurant id
