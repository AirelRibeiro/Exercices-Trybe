-- 1 - Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution';

-- 2 - Escreva uma query para exibir três números em três colunas.
SELECT 1, 2, 3;

-- 3 - Escreva uma query para exibir a soma dos números 10 e 15.
SELECT 10 + 15;

-- 4 - Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT 2 * (5 + 4);

-- 5 - Escreva uma query para exibir todas as informações de todos os cientistas.
USE Scientists;
SELECT * FROM Scientists;

-- 6 - Escreva uma query para exibir o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.
SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Projects;

-- 7 - Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT * FROM Scientists ORDER BY name;

-- 8 - Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
SELECT code, name, hours FROM Projects ORDER BY name DESC;

-- 9 - Escreva uma query que exiba a string "O projeto name precisou de hours horas para ser concluído." para cada projeto
SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.')
FROM Projects;

-- 10 - Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT name, hours
FROM Projects
ORDER BY hours DESC
LIMIT 3;

-- 11 - Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT project FROM AssignedTo;

-- 12 - Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT name
FROM Projects
ORDER BY hours DESC
LIMIT 1;

-- 13 - Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT name
FROM Projects
ORDER BY hours ASC
LIMIT 1
OFFSET 1;

-- 14 - Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT code, name, hours
FROM Projects
ORDER BY hours ASC
LIMIT 5;

-- 15 - Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists.')
FROM Projects;

