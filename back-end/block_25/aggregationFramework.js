use (agg_examples);

db.transactions.insertMany([
  { value: 5900, from: "Dave America", to: "Ned Flanders", bank: 'International' },
  { value: 1000, from: "Mark Zuck", to: "Edna Krabappel", bank: 'FloridaBank' },
  { value: 209, from: "Lisa Simpson", to: "Dave America", bank: 'bankOfAmerica' },
  { value: 10800, from: "Arnold Schuz", to: "Mark Zuck", bank: 'JPMorgan' },
  { value: 850, from: "Barney Gumble", to: "Lisa Simpson", bank: 'Citigroup' },
  { value: 76000, from: "Ned Flanders", to: "Edna Krabappel", bank: 'JPMorgan' },
  { value: 1280, from: "Dave America", to: "Homer Simpson", bank: 'Citigroup' },
  { value: 7000, from: "Arnold Schuz", to: "Ned Flanders", bank: 'International' },
  { value: 59020, from: "Homer Simpson", to: "Lisa Simpson", bank: 'International' },
  { value: 100, from: "Mark Zuck", to: "Barney Gumble", bank: 'FloridaBank' },
]);

// Selecione todas as transações feitas pelo cliente chamado "Dave America".
db.transactions.aggregate([{ $match: { from: "Dave America" } } ]);

// Selecione todas as transações com o valor entre 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson".
db.transactions.aggregate(
	[
		{
			$match: {
				$or: [
					{ to: "Lisa Simpson" },
					{ value: { $in: [700, 6000] } },
				]
			}
		}
	]
);

// Selecione três transações com o valor acima de 1000.
db.transactions.aggregate([
	{
		$match: { 
			value: { $gt: 1000 },
		},
	},
	{
		$limit: 5
	}
]);



use (test);
db.books.insertOne(
  {
    _id: 1,
    title: "A Fundação",
    isbn: "0001122223334",
    author: { last: "Asimov", first: "Isaac" },
    copies: 5
  }
)
// incluindo campos específicos;
db.books.aggregate(
  [
    {
$project : {
				_id: 0,
        title : 1,
        author : 1
      }
    }
  ]
);
// excluindo campos específicos;
db.books.aggregate([
  {
$project : {
      copies: 0
    }
  }
]);
// excluindo campos em subdocumentos usando dot notation;
db.books.aggregate([
  {
$project : {
      "author.first": 0,
      copies: 0
    }
  }
]);

// incluindo campos calculados usando string;
db.books.aggregate([
  {
	$project: {
      title: 1,
      isbn: {
        prefix: { $substr: ["$isbn", 0, 3] },
        group: { $substr: ["$isbn", 3, 2] },
        publisher: { $substr: ["$isbn", 5, 4] },
        title: { $substr: ["$isbn", 9, 3] },
        checkDigit: { $substr: ["$isbn", 12, 1] }
      },
      lastName: "$author.last",
      copiesSold: "$copies"
    }
  }
]);
// formato do documento;
/*
{
  "_id": 1,
  "title": "A Fundação",
  "isbn": {
    "prefix": "000",
    "group": "11",
    "publisher": "2222",
    "title": "333",
    "checkDigit": "4"
  },
  "lastName": "Asimov",
  "copiesSold": 5
}
*/


// $group e operadores de acumulação
db.sales.insertMany([
	{
		_id: 1,
		item: "Código Limpo",
		price: NumberDecimal("10"),
		quantity: NumberInt("2"),
		date: ISODate("2014-03-01T08:00:00Z")
	},
	{
		_id: 2,
		item: "O Homem e Seus Símbolos",
		price: NumberDecimal("20"),
		quantity: NumberInt("1"),
		date: ISODate("2014-03-01T09:00:00Z")
	},
	{
		_id: 3,
		item: "Comunicação Não-Violenta",
		price: NumberDecimal("5"),
		quantity: NumberInt( "10"),
		date: ISODate("2014-03-15T09:00:00Z")
	},
	{
		_id: 4,
		item: "Comunicação Não-Violenta",
		price: NumberDecimal("5"),
		quantity:  NumberInt("20"),
		date: ISODate("2014-04-04T11:21:39.736Z")
	},
	{
		_id: 5,
		item: "Código Limpo",
		price: NumberDecimal("10"),
		quantity: NumberInt("10"),
		date: ISODate("2014-04-04T21:23:13.331Z")
	},
	{
		_id: 6,
		item:"A Coragem de Ser Imperfeito",
		price: NumberDecimal("7.5"),
		quantity: NumberInt("5" ),
		date: ISODate("2015-06-04T05:08:13Z")
	},
	{
		_id: 7,
		item: "A Coragem de Ser Imperfeito",
		price: NumberDecimal("7.5"),
		quantity: NumberInt("10"),
		date: ISODate("2015-09-10T08:43:00Z")
	},
	{
		_id: 8,
		item: "Código Limpo",
		price: NumberDecimal("10"),
		quantity: NumberInt("5" ),
		date: ISODate("2016-02-06T20:20:13Z")
	}
	])
// contando número de documentos;
	db.sales.aggregate([
		{
	$group: {
				_id: null,
				count: { $sum: 1 }
			}
		}
	]);
// ou
	db.sales.count();

/*
saida;
{ "_id" : null, "count" : 8 }
*/

// retornando valores distintos;
// todos os valores unicos do campo item e quantos são;

db.sales.aggregate([
  {
$group : {
      _id : "$item",
      count: { $sum: 1}
    }
  }
]);

/*
retorno:
{ "_id" : "A Coragem de Ser Imperfeito", "count" : 2 }
{ "_id" : "O Homem e Seus Símbolos", "count" : 1 }
{ "_id" : "Código Limpo", "count" : 3 }
{ "_id" : "Comunicação Não-Violenta", "count" : 2 }
*/

// somando valores com $sum, que aceita mais modificadores;
// multiplica-se o valor do campo price pelo valor do campo quantity;
db.sales.aggregate([
  {
$group : {
      _id : "$item",
      totalSaleAmount: {
$sum: {
$multiply: ["$price", "$quantity"]
        }
      }
    }
  }
]);

/* saida:

{ "_id" : "A Coragem de Ser Imperfeito", "totalSaleAmount" : NumberDecimal("112.5") }
{ "_id" : "O Homem e Seus Símbolos", "totalSaleAmount" : NumberDecimal("20") }
{ "_id" : "Código Limpo", "totalSaleAmount" : NumberDecimal("170") }
{ "_id" : "Comunicação Não-Violenta", "totalSaleAmount" : NumberDecimal("150") }
*/

// having (MySQL, filtro) combinando estágios no aggregate;
db.sales.aggregate([
  {
$group: {
      _id : "$item",
      totalSaleAmount: {
$sum: {
$multiply: ["$price", "$quantity"]
        }
      }
    }
  },
  {
$match: { "totalSaleAmount": { $gte: 100 } }
  }
]);

// agrupando por null;
db.sales.aggregate([
  {
$group : {
      _id : null,
      totalSaleAmount: {
$sum: { $multiply: ["$price", "$quantity"] }
      },
      averageQuantity: { $avg: "$quantity" },
      count: { $sum: 1 }
    }
  }
]);

/* saida:
{
  "_id" : null,
  "totalSaleAmount" : NumberDecimal("452.5"),
  "averageQuantity" : 7.875,
  "count" : 8
} 
*/



// Selecione todos os bancos, ou seja, valores do campo bank ;
use (agg_example);
db.transactions.aggregate([
	{
		$group: {
			bank: { $sum: 1 },
			_id: '$bank'
		}
	}
]);

// Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
    {
$group: {
      _id: '$bank',
      total: { $sum: '$value' },
      transações: { $sum: 1},
    }
  }
]);

// Selecione o valor total de transações por banco;
db.transactions.aggregate([
	{
		$group: {
			_id: '$bank',
			transacoeTotais: { $sum: '$value' },
		}
	}
]);

// Selecione os bancos que têm o valor total de transações maior que 1000.
db.transactions.aggregate([
    {
$group: {
        _id: '$bank',
        total: { $sum: '$value' },
      }
    },
    {
$match: {"total": { $gt: 1000}}
    }
  ]);
  