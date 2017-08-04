DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
-- "NOT NULL" always going to have a value
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (id),
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date TIMESTAMP (5) NOT NULL
    );
    
INSERT INTO burgers (burger_name, devoured) VALUES ('cheeseburger', 1);


