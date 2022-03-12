/*Start MYSQL server connection*/
MYSQL -h localhost -u root -p;

/*Show all databases*/
SHOW DATABASES;

/*Select some database*/
USE databasename;

/*Create a table*/
CREATE TABLE users(name VARCHAR(64), email VARCHAR(128), age INT);

/*Showing all tables*/
SHOW TABLES;

/*Show table description*/
DESCRIBE tablename;

/*Inserting data on a table*/
INSERT INTO users (name, email, age) VALUES (
    "Jax", "jax@gmail.com", 20
);

/*SELECT all rows where the age is 20*/
SELECT * FROM users WHERE age = 20;

/*Deleting row from table*/
DELETE FROM users WHERE email = "jax@gmail.com";

/*Updating tables'column data*/
UPDATE users SET name = "Novo Nome" WHERE email = "spencer@gmail.com";