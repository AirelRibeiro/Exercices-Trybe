CREATE DATABASE IF NOT EXISTS model_exercise;

USE model_exercise;

CREATE TABLE user
(
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	email VARCHAR(100),
    password VARCHAR(30) NOT NULL,
	PRIMARY KEY(id)
);