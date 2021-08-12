-- Exercício 1:
-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes atuados.
USE sakila;
delimiter $$
create procedure ShowMostPopularActors() BEGIN
select
  actor_id,
  count(film_id)
from
  film_actor
group by
  actor_id
order by
  count(film_id) desc
limit
  10;
end $$
delimiter;
call ShowMostPopularActors




-------------------------------------------
-- Exercício 2:
-- Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;
DELIMITER $$

CREATE PROCEDURE SelectMovieByCategory(IN categoryName VARCHAR(100))
BEGIN
	SELECT film.film_id, film.title, film_category.category_id, category.name
	FROM sakila.film as film
	INNER JOIN sakila.film_category as film_category
		ON film_category.film_id = film.film_id
	INNER JOIN sakila.category as category
		ON category.category_id = film_category.category_id
	WHERE category.name = categoryName;

END $$

DELIMITER ;

CALL SelectMovieByCategory('Comedy')


-- Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o cliente está ou não ativo, através de um parâmetro de saída.

USE sakila;
DELIMITER $$

CREATE PROCEDURE FindStatusByName(IN clientEmail VARCHAR(200), OUT clientStatus Bool)
 BEGIN
 SET clientStatus = (
        SELECT active
        FROM sakila.customer
        WHERE email = clientEmail
    );
END $$
    
DELIMITER ;

SELECT @clientStatus;
Call FindStatusByName('SANDRA.MARTIN@sakilacustomer.org', @clientStatus);
SELECT @clientStatus

-- não entendi bem como funciona a parte de chamar o in e out