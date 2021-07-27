SELECT
  a.actor_id,
  a.first_name,
  a.last_name,
  f.film_id
FROM
  sakila.actor AS a
  INNER JOIN sakila.film_actor AS f ON a.actor_id = f.actor_id;

-- 1. Monte uma *query* que exiba o **id do ator** , **nome do ator** e **id do filme** em que ele já atuou usando as tabelas `actor` e `film_actor` .