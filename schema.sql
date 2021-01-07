-- Drops the database if it already exists --
DROP DATABASE IF EXISTS employee_tracker_db;

-- Creates new local database
CREATE DATABASE employee_tracker_db;

-- Set new database as default
USE employee_tracker_db;


-- Create TABLE ONE (Department)
CREATE TABLE department (
  id int AUTO_INCREMENT NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY(id)
);

-- Create TABLE TWO (Employee's role)

CREATE TABLE role (
  id int AUTO_INCREMENT NOT NULL,
  title varchar(40),
  salary DECIMAL,
  department_id int, 
  PRIMARY KEY(id),
  FOREIGN KEY(department_id) REFERENCES department (id)
);

-- Create TABLE THREE (Employees' info)

CREATE TABLE employee (
  id int AUTO_INCREMENT NOT NULL,
  first_name varchar(40),
  last_name varchar(40),
  role_id int,
  manager_id int,
  PRIMARY KEY(id),
  FOREIGN KEY(role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES role(id)
);

-- Select tables content

SELECT * 
FROM employee; 

SELECT * 
FROM role;

SELECT * 
FROM department; 
 
