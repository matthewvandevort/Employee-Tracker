INSERT INTO department (name)
VALUES
('IT'),
('Accounting'),
('Sales'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 15000, 2),
('Account Analyst', 100000, 2),
('Marketing Coordinator', 85000, 3),
('Salesperson', 70000, 3),
('Project Manager', 95000, 4),
('Operations Manager', 110000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Matthew', 'Vandevort', 1, 1),
('Dennis', 'Leary', 2, null),
('Becky', 'Moore', 3, 3),
('Jason', 'Brown', 4, null),
('Jaime', 'Smith', 5, 5),
('Jane', 'Doe', 7, null),
('Dick', 'Tracy', 6, null),
('Peter', 'Little', 7, 7);