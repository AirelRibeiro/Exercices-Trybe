USE PiecesProviders;

-- 1 - Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT.
-- Forma 1
-- SELECT Provides.piece, Provides.price, Pieces.name
-- FROM Provides, Pieces
-- WHERE Provides.provider = 'RBT'
-- AND Provides.piece = Pieces.code;

-- Forma 2 - Fica mais interessante usando JOIN:
SELECT Provides.piece, Pieces.name, Provides.price
FROM Provides
JOIN  Pieces 
ON (Provides.piece = Pieces.code)
WHERE Provides.provider = 'RBT';


-- 2 - Escreva uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT Pieces.code, Pieces.name, Provides.provider, Provides.price 
FROM Pieces, Provides
ORDER BY Provides.price DESC
LIMIT 5;

-- 3 - Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT DISTINCT provider, price FROM Provides
ORDER BY price DESC
LIMIT 2, 4;

-- Não funciona como proposto:
-- SELECT Pieces.code, Pieces.name, Provides.provider, Provides.price
-- FROM Pieces, Provides
-- WHERE Provides.piece = Pieces.code
-- AND 
-- ORDER BY price DESC
-- LIMIT 4
-- OFFSET 2;

-- 4 - Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL. Ordene o resultado pelos preços das peças de forma decrescente.
SELECT * FROM Provides
WHERE provider LIKE 'HAL'
ORDER BY price DESC;

-- 5 - Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT COUNT(provider) FROM Provides
WHERE piece LIKE 1;

-- Exercicios 7 - 9 feitos em links externos; 6 não existe no course

-- Resolução 10 -> https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial#United

