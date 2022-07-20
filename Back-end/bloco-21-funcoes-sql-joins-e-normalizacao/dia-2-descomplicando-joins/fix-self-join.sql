-- Queremos saber o Nome das pessoas colaboradoras e suas respectivas gerências (manager) cujos departamentos (department) são diferentes.
SELECT
    CONCAT(Employee.first_name, " ", Employee.last_name) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente"
FROM
	hr.employees AS Employee
INNER JOIN
	hr.employees AS Manager ON Employee.manager_id = Manager.employee_id
WHERE
	Employee.department_id <> Manager.department_id;
-- Exiba o Nome e a quantidade de pessoas lideradas de cada pessoa gerente.
SELECT
    CONCAT(Manager.first_name, " ", Manager.last_name) AS "Nome Gerente",
    COUNT(*)
FROM
	hr.employees AS Employee
INNER JOIN
	hr.employees AS Manager ON Employee.manager_id = Manager.employee_id
GROUP BY Manager.employee_id;

