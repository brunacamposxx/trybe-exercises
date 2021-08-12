-- Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de pagamentos feitos até o momento por um determinado customer_id .

USE sakila;
DELIMITER $$

CREATE FUNCTION ReturnsTotalPayments(id int)
RETURNS INT READS SQL DATA
BEGIN
    DECLARE totalDePgtos INT;
	SELECT COUNT(*)
    FROM sakila.payment
    WHERE customer_id = id INTO totalDePgtos;
    RETURN totalDePgtos;
END $$

DELIMITER ;

-- Como usar:

 SELECT ReturnsTotalPayments(1);



 -- Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.

 USE sakila;
DELIMITER $$

CREATE FUNCTION ReturnsFilmNameById(id INT)
RETURNS VARCHAR(300) READS SQL DATA
BEGIN
    DECLARE movie_title VARCHAR(300);
    SELECT distinct film.title
    FROM sakila.inventory as inventory
    INNER JOIN sakila.film as film
    ON film.film_id = inventory.film_id
    WHERE inventory.inventory_id = id INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

-- Como usar:

SELECT ReturnsFilmNameById(2); 


