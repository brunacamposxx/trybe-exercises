-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT
  actor.actor_id,
  actor.first_name,
	film_actor.film_id,
	film.title
from
  sakila.actor as actor
  inner join sakila.film_actor as film_actor 
	on actor.actor_id = film_actor.actor_id
	inner join sakila.film as film
	on film.film_id = film_actor.film_id
