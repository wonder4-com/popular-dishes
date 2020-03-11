const faker = require('faker');

var randomName = faker.name.findName(); 

for (var i = 0; i < 20; i++) {
    console.log(faker.name.findName());
}

