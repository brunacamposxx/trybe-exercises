SELECT
  staff.first_name,
  staff.last_name,
  address.address_id,
  address.address
FROM
  sakila.staff as staff
  INNER JOIN sakila.address as address ON staff.address_id = address.address_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .