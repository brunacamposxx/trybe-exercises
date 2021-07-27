-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount ) paga aos funcionários no ano de 2006. Use as tabelas payment e staff . Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

SELECT
  staff.first_name,
	staff.last_name,
	pay.amount,
payment_date
from
  sakila.staff as staff
  inner join sakila.payment as pay on staff.staff_id = pay.staff_id
where 
payment_date
between '2006-01-01' and '2006-12-31'
