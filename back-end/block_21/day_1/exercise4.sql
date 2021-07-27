-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .

SELECT
  C.first_name,
  C.email,
  A.address_id,
  A.address,
	A.district
from
  customer as C
  inner join address as A 
	on C.address_id = A.address_id
WHERE
  district = 'California' and first_name = 'rene';