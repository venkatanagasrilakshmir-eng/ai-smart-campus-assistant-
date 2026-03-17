CREATE DATABASE campus;
USE campus;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(100)
);

CREATE TABLE events (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100),
  date DATE,
  description TEXT
);

CREATE TABLE hackathons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  prize VARCHAR(100),
  deadline DATE
);

CREATE TABLE canteen (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item VARCHAR(100),
  price INT
);
