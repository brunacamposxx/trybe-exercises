-- Exercício 1:
-- Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes atuados.
USE sakila;
delimiter $$
create procedure ShowMostPopularActors() BEGIN
select
  actor_id,
  count(film_id)
from
  film_actor
group by
  actor_id
order by
  count(film_id) desc
limit
  10;
end $$
delimiter;
call ShowMostPopularActors