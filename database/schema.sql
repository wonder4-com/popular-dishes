DROP DATABASE IF EXISTS PopularDishesList;

CREATE DATABASE PopularDishesList;

USE PopularDishesList;

CREATE TABLE Restaurants (
    restaurant_id int NOT NULL AUTO_INCREMENT,
    restaurant_name varchar (50) NOT NULL,
    PRIMARY KEY(restaurant_id)
);

CREATE TABLE PopularDishes (
    dish_id int NOT NULL AUTO_INCREMENT,
    dish_name varchar (50) NOT NULL,
    price decimal (10, 2) NOT NULL,
    description varchar (1000) NOT NULL,
    review_count INT NOT NULL,
    restaurant int,
    PRIMARY KEY(dish_id),
    FOREIGN KEY (restaurant) REFERENCES Restaurants(restaurant_id)
);


CREATE TABLE photos (
    photo_id int NOT NULL AUTO_INCREMENT,
    url varchar (50) NOT NULL,
    caption varchar (1000) NOT NULL,
    popular_dish int,
    PRIMARY KEY(photo_id),
    FOREIGN KEY (popular_dish) REFERENCES PopularDishes(dish_id)
);