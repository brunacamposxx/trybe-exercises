-- Para fixar esses conceitos, tente encontrar as seguintes informações:
-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
select
  t1.film_id,
  t1.replacement_cost,
  t2.film_id,
  t2.replacement_cost
from
  sakila.film as t1,
  sakila.film as t2
where
  t1.replacement_cost = t2.replacement_cost;
-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
select
  t1.title,
  t1.rental_duration,
  t2.title,
  t2.rental_duration
from
  sakila.film as t1,
  sakila.film as t2
where
  t1.rental_duration = t2.rental_duration
HAVING
  t1.rental_duration between 2
  and 4;
