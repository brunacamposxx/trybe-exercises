-- Para Fixar

-- Para praticar, vamos encontrar algumas informações sobre os filmes cadastrados em nossa base de dados.

-- Monte um query que exiba:

-- A média de duração dos filmes e dê o nome da coluna de 'Média de Duração';

SELECT avg(length) as 'média de duracao' FROM sakila.film;

-- A duração mínima dos filmes como 'Duração Mínima';

SELECT min(length) as 'duracao minima' FROM sakila.film;

-- A duração máxima dos filmes como 'Duração Máxima';
SELECT max(length) as 'duracao maxima' FROM sakila.film;


-- A soma de todas as durações como 'Tempo de Exibição Total';
SELECT sum(length) as 'tempo de exibicao total' FROM sakila.film;


-- E finalmente, a quantidade total de filmes cadastrados na tabela sakila.film como 'Filmes Registrados'.
SELECT count(*) as 'filmes registrados' FROM sakila.film;