CREATE DATABASE IF NOT EXISTS cep_lookup_dois;

USE cep_lookup_dois;

CREATE TABLE IF NOT EXISTS ceps (
  cep VARCHAR(8) NOT NULL,
  logradouro VARCHAR(50) NOT NULL,
  bairro VARCHAR(20) NOT NULL,
  localidade VARCHAR(20) NOT NULL,
  uf VARCHAR(2) NOT NULL,
  PRIMARY KEY (cep)
);

INSERT INTO ceps (cep, logradouro, bairro, localidade, uf)
VALUES
	('12345678', 'Rua feliz', 'Casinha', 'Aqui', 'AB'),
	('91123456', 'Rua triste', 'Casona', 'Lá', 'BC'),
	('78901234', 'Rua média', 'Da minha casa', 'Acolá', 'DE'),
	('56789012', 'Rua nem lá nem cá', 'Vamos todos juntos', 'Logo ali', 'EF'),
	('34567890', 'Rua psicótica', 'Bairro do Rivotril', 'Já chegamos', 'FG'),
	('41424344', 'Rua duvidosa', 'Homem hétero branco', 'Ali no Facebook', 'GH'),
	('45464748', 'Rua ladrilhada', 'Não vamos não', 'Para meu amor passar', 'HI');
    
    