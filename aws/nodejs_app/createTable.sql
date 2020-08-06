#CREATE DATABASE IF NOT EXISTS mydb;

USE mydb;

DROP TABLE IF EXISTS Users;
CREATE TABLE IF NOT EXISTS Users (
  id VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

INSERT INTO Users (id, password) VALUES ('kenneth', '1234');

SELECT password FROM Users WHERE id='kenneth';