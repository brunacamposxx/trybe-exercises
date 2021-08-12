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