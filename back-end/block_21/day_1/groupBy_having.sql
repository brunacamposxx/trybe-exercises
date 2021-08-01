-- Para Fixar
-- Usando a query a seguir, exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) à coluna gerada por AVG(length) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.
-- Copiar
SELECT
  rating,
  AVG(length)
FROM
  sakila.film
GROUP BY
  rating;
answer:
SELECT
  rating,
  AVG(length) as AVG_filter
FROM
  sakila.film
GROUP BY
  rating
HAVING
  AVG_filter between 115.0
  and 121.50
order by
  AVG_filter desc;
-- Usando a query a seguir, exiba apenas os valores de custo de substituição que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost) , de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.
  -- Copiar
SELECT
  rating,
  SUM(replacement_cost)
FROM
  sakila.film
GROUP by
  rating;
answer:
SELECT
  rating,
  SUM(replacement_cost) as cost_filter
FROM
  sakila.film
GROUP by
  rating
having
  cost_filter > 3950
order by
  cost_filter asc;