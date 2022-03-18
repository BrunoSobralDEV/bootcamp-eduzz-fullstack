# Mysql
## Modelo relacional
- Tabelas são compostas por entidades, atributos e chaves;
- As chaves permitem o relacionamento entre os dados;
- Dados organizados de forma estruturada;
- Dados atômicos (único);
- Consulta e manipulação de dados simplificadas;

## Operações/Comandos
- CREATE TABLE
    ```sql
    CREATE TABLE nome_da_tabela (
        id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(20) NOT NULL,
        nascimento DATE
    )
    ```
- INSERT INTO: indicar as colunas que serão preenchidas e os respectivos valores
    ```sql
    INSERT INTO nome_da_tabela (nome, nascimento) VALUES ('Bruno', '1991-08-25')
    ```
- SELECT:
    ```sql
    SELECT * FROM nome_da_tabela;
    SELECT nome_da_coluna_específica FROM nome_da_tabela;
    ```
- UPDATE:
    - WHERE: define uma condição para nosso comando
    ```sql
    UPDATE nome_da_tabela SET nome_da_coluna = 'valor'
    UPDATE pessoas SET nome = 'Bruno' WHERE id = 1
    ```
- DELETE
    ```sql
    DELETE FROM nome_da_tabela WHERE condicao
    DELETE FROM pessoas WHERE id=1
    ```
    - "With great power comes great responsibility". Não tem como desfazer, uma dica é sempre fazer um `SELECT` e comparar com o `DELETE`.

- ORDER BY/DESC
    ```sql
    SELECT * FROM pessoa ORDER BY nome 
    SELECT * FROM pessoa ORDER BY nome DESC
    ```
- GROUP BY
   ```sql
    SELECT * FROM `pessoa` GROUP BY genero;
    /* id = parâmetro que eu quero que ele conte*/
    SELECT COUNT(id), genero FROM `pessoa` GROUP BY genero;
   ```

-
   ```sql
   ```

## phpMyAdmin - gerenciador de banco de dados
### Atalhos
- ctrl + enter: inserção código sql