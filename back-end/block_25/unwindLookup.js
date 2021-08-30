use (agg_example);

db.clients.insertMany([
  { name: "Dave America", State: "Florida" },
  { name: "Ned Flanders", State: "Alasca" },
  { name: "Mark Zuck", State: "Texas" },
  { name: "Edna Krabappel", State: "Montana" },
  { name: "Arnold Schuz", State: "California" },
  { name: "Lisa Simpson", State: "Florida" },
  { name: "Barney Gumble", State: "Texas" },
  { name: "Homer Simpson", State: "Florida" },
]);

agg_example> db.transactions.find().pretty();
[
  {
    _id: ObjectId("61295ee476b0f1a49d47ef85"),
    value: 5900,
    from: 'Dave America',
    to: 'Ned Flanders',
    bank: 'International'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef86"),
    value: 1000,
    from: 'Mark Zuck',
    to: 'Edna Krabappel',
    bank: 'FloridaBank'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef87"),
    value: 209,
    from: 'Lisa Simpson',
    to: 'Dave America',
    bank: 'bankOfAmerica'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef88"),
    value: 10800,
    from: 'Arnold Schuz',
    to: 'Mark Zuck',
    bank: 'JPMorgan'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef89"),
    value: 850,
    from: 'Barney Gumble',
    to: 'Lisa Simpson',
    bank: 'Citigroup'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef8a"),
    value: 76000,
    from: 'Ned Flanders',
    to: 'Edna Krabappel',
    bank: 'JPMorgan'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef8b"),
    value: 1280,
    from: 'Dave America',
    to: 'Homer Simpson',
    bank: 'Citigroup'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef8c"),
    value: 7000,
    from: 'Arnold Schuz',
    to: 'Ned Flanders',
    bank: 'International'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef8d"),
    value: 59020,
    from: 'Homer Simpson',
    to: 'Lisa Simpson',
    bank: 'International'
  },
  {
    _id: ObjectId("61295ee476b0f1a49d47ef8e"),
    value: 100,
    from: 'Mark Zuck',
    to: 'Barney Gumble',
    bank: 'FloridaBank'
  }
];

// Selecione todos os clientes com as suas respectivas transações feitas;
db.clients.aggregate([
	{
		$lookup: {
			from: "transactions",
			localField: "name",
			foreignField: "from",
			as: "transacoes_feitas",
		}
	},
]);

// Selecione quatro clientes com as suas respectivas transações recebidas;
db.clients.aggregate([
	{
		$lookup: {
			from: "transactions",
			localField: "name",
			foreignField: "from",
			as: "transacoes_feitas",
		}
	},
	{ $limit: 4 },
]);

// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.

db.clients.aggregate([
	{ $match: { "State": "Florida"} },
	{
		$lookup: {
			from: "transactions",
			localField: "name",
			foreignField: "from",
			as: "transacoes_feitas",
		}
	},
]);