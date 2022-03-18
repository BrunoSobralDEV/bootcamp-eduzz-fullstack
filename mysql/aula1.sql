CREATE TABLE pessoa (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE
)

INSERT INTO pessoa (nome, nascimento) VALUES ('Bruno', '1991-08-25');
INSERT INTO pessoa (nome, nascimento) VALUES ('Bia', '1991-08-25');
INSERT INTO pessoa (nome, nascimento) VALUES ('Carla', '1991-08-25');
INSERT INTO pessoa (nome, nascimento) VALUES ('Yasmin', '1991-08-25');

UPDATE pessoa SET nome='Bruno Sobral' WHERE id=1

DELETE FROM pessoa WHERE id=1

SELECT FROM pessoa ORDER BY nome
SELECT FROM pessoa ORDER BY nome DESC
