
-- Select database to seed data

USE employee_tracker_db;

-- Insert content in TABLE ONE (Department)

INSERT INTO department (name)
VALUES 
("Accounting"),
("Collections"),
("Purchasing"),
("Credit"),
("Sales"),
("Manufacturing"),
("IT");

-- Insert content in TABLE TWO (Department)

INSERT INTO department (name)
VALUES 
("Accounting"),
("Collections"),
("Purchasing"),
("Credit"),
("Sales"),
("Manufacturing"),
("IT");

-- Insert content in TABLE TWO (Employees' Role)

INSERT INTO role (title, salary, department_id)
VALUES 
("Administrative Assistant", 2100, 5),
("Jr. Programmer", 2900, 7),
("Collections Agent", 2300, 2),
("Loans Agent", 3000, 4),
("Accounting Manager", 3600, 1),
("Assembly Agent", 3200, 6),
("Receptionist", 2200, 5);

-- Insert content in TABLE THREE (Employees' Role)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Paulo", "Fernando", 7, 4),
("Mariana", "Morante", 5, 2),
("Shelly", "Sheinbaum", 4, 2),
("Francisco", "Castro", 6, 4),
("McDonald", "Shellye", 5, 1),
("Carlos", "Reygadas", 2, 3),
("Monica", "Esparza", 1, 1);



SELECT *
FROM department;

SELECT *
FROM role;

SELECT *
FROM employee