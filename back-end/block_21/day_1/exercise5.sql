-- Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer .
SELECT
  C.first_name,
  COUNT(A.address) as `quantidade`
from
  sakila.customer as C
  inner join sakila.address as A on C.address_id = A.address_id
WHERE
  C.active = 1
GROUP BY
  C.first_name
ORDER BY
  C.first_name DESC;
