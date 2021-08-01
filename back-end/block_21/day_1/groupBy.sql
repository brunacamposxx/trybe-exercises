-- Praticando GROUP BY
-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
SELECT
  active,
  count(*)
from
  sakila.customer
GROUP BY
  active -- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja , o status dos clientes (ativos ou inativos) e a quantidade de clientes por status .
SELECT
  active,
  store_id,
  count(*)
from
  sakila.customer
GROUP BY
  store_id,
  active;
-- Monte uma query que exiba a média de duração de locação por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
  -- por que essa query nao funciona sem ALIAS?
SELECT
  AVG(rental_duration),
  rating
from
  sakila.film
group by
  rating
order by
  rental_duration desc
SELECT
  AVG(rental_duration) as avg_rental_duration,
  rating
from
  sakila.film
group by
  rating
order by
  avg_rental_duration desc -- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
select
  count(district) as district_count,
  district
from
  sakila.address
group by
  district
order by
  count(*) desc