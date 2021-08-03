-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram emprestados.
select
  id,
  title
from
  hotel.books as b
where
  not exists (
    select
      *
    from
      hotel.books_lent
    where
      b.id = book_id
  );
	
	
	-- Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente emprestados e que contêm a palavra "lost" no título.

select
  id,
  title
from
  hotel.books as b
where
  exists (
    select
      *
    from
      hotel.books_lent
    where
      b.id = book_id AND
			title like '%lost%'
  );

  -- Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.


select
  `Name`
from
  hotel.customers as c
where
  not exists (
    select
      *
    from
      hotel.carsales
    where
      c.CustomerId = CustomerID
  );


  -- Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.

SELECT 
    cus.name, car.name
FROM
    hotel.Cars AS car
        INNER JOIN
    hotel.Customers AS cus
WHERE
    EXISTS( SELECT 
            *
        FROM
            hotel.CarSales
        WHERE
            CustomerID = cus.CustomerId
                AND carID = car.ID);