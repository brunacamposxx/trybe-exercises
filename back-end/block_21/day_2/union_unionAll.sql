-- Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
select
  first_name,
  last_name
from
  sakila.staff
union all
select
  first_name,
  last_name
from
  sakila.actor;
-- Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
select
  first_name
from
  sakila.customer
where
  first_name like '%tracy%'
union all
select
  first_name
from
  sakila.actor
WHERE
  first_name like '%je%';
-- Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados repetidos sejam exibidos. Ordene os resultados em ordem alfabética.
  (
    select
      first_name
    from
      sakila.actor
    order by
      actor_id desc
    limit
      5
  )
union
  (
    select
      first_name
    from
      sakila.staff
    limit
      1
  )
union
  (
    select
      first_name
    from
      sakila.customer
    limit
      5 offset 15
  )
order by
  first_name ASC;
-- Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 resultados e que você está na 4ª página. Monte uma query que simule esse cenário.
  (
    SELECT
      first_name,
      last_name
    FROM
      sakila.customer
    ORDER BY
      first_name,
      last_name
    LIMIT
      60
  )
UNION
  (
    SELECT
      first_name,
      last_name
    FROM
      sakila.actor
    ORDER BY
      first_name,
      last_name
    LIMIT
      60
  )
ORDER BY
  first_name,
  last_name
LIMIT
  15 OFFSET 45;