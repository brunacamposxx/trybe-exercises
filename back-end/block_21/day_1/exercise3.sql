-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde o cliente mora. Essas informações podem ser encontradas nas tabelas customer e address .
SELECT
  C.customer_id,
  C.first_name,
  C.last_name,
  C.email,
  A.address_id,
  A.address
from
  customer as C
  inner join address as A 
	on C.address_id = A.address_id
ORDER BY
  first_name DESC
LIMIT
  100;
