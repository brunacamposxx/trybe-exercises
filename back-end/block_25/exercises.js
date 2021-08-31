erp> db.clientes.find().limit(1).pretty();
[
  {
    _id: ObjectId("5e7bc243b642fc6050badb14"),
    clienteId: 2,
    nome: 'SOPHIE PINTO',
    dataNascimento: ISODate("1999-09-19T12:01:10.000Z"),
    sexo: 'MASCULINO',
    endereco: {
      logradouro: 'ALAMEDA LUIZ MIGUEL NOVAES',
      numero: '62',
      bairro: 'PINDURA SAIA',
      cidade: 'FERREIRA',
      uf: 'AL',
      cep: '97749-131'
    }
  }
]

// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .

db.clientes.aggregate([
	{ $match: { sexo: "MASCULINO" } }
]);

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .

db.clientes.aggregate([
	{ 
		$match: {
		  sexo: "FEMININO", 
		  dataNascimento: { 
				$gte: ISODate('1995-01-01'),
				$lte: ISODate('2005-12-31') }
		} 
	}
]);


// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .

db.clientes.aggregate([
	{ 
		$match: {
		  sexo: "FEMININO", 
		  dataNascimento: { 
				$gte: ISODate('1995-01-01'),
				$lte: ISODate('2005-12-31') }
		}
	},
	{ $limit: 5 },
]);

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.

db.clientes.aggregate([
	{ $match: { "endereco.uf": "SC" } },
	{ $group: { _id: "$endereco.uf", total: { $sum: 1 } } }
]);


// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .

db.clientes.aggregate([
	{ $group: { _id: "$sexo", total: { $sum: 1 } } }
]);

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .

db.clientes.aggregate([
	{ 
		$group: {
			_id: {
				sexo: "$sexo", uf: "$endereco.uf"
			},
			total: { $sum: 1 }
		}
	}
]);


// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):

// Copiar
// {
//   "estado": "SP",
//   "sexo": "MASCULINO",
//   "total": 100
// }

db.clientes.aggregate([
	{ 
		$group: {
			_id: {
			sexo: "$sexo", uf: "$endereco.uf"
			},
			total: { $sum: 1 }
		}
	},
	{ $project: {
			_id: 0,
			sexo: "$_id.sexo",
			estado: "$_id.uf",
			total: 1,
		} 
	}
]);


-----------------------------------------------------

erp> db.vendas.find().limit(1).pretty();
[
  {
    _id: ObjectId("5e7bd256ad5e8ba212388cdf"),
    clienteId: 384,
    dataVenda: ISODate("2018-04-21T09:22:14.000Z"),
    status: 'PAGAMENTO NAO APROVADO',
    itens: [
      {
        produtoId: 221,
        nome: 'MAÇÃ ARGENTINA COM CASCA CRUA',
        valorUnitario: 14.61,
        quantidade: 19
      },
      {
        produtoId: 374,
        nome: 'CARNE BOVINA PALETA SEM GORDURA COZIDA',
        valorUnitario: 91.94,
        quantidade: 4
      },
      {
        produtoId: 245,
        nome: 'PÊSSEGO ENLATADO EM CALDA',
        valorUnitario: 44.31,
        quantidade: 19
      },
      {
        produtoId: 38,
        nome: 'LASANHA MASSA FRESCA CRUA',
        valorUnitario: 68.59,
        quantidade: 19
      },
      {
        produtoId: 443,
        nome: 'SALAME',
        valorUnitario: 60.46,
        quantidade: 20
      },
      {
        produtoId: 118,
        nome: 'COUVE-FLOR COZIDA',
        valorUnitario: 50.24,
        quantidade: 13
      },
      {
        produtoId: 387,
        nome: 'CROQUETE DE CARNE CRU',
        valorUnitario: 16,
        quantidade: 7
      },
      {
        produtoId: 262,
        nome: 'MANTEIGA SEM SAL',
        valorUnitario: 42.35,
        quantidade: 4
      },
      {
        produtoId: 239,
        nome: 'MORANGO CRU',
        valorUnitario: 50.17,
        quantidade: 8
      },
      {
        produtoId: 32,
        nome: 'FARINHA DE CENTEIO INTEGRAL',
        valorUnitario: 9.8,
        quantidade: 7
      },
      {
        produtoId: 491,
        nome: 'ACHOCOLATADO PÓ',
        valorUnitario: 41.25,
        quantidade: 2
      },
      {
        produtoId: 5,
        nome: 'ARROZ TIPO 2 COZIDO',
        valorUnitario: 19.13,
        quantidade: 7
      },
      {
        produtoId: 378,
        nome: 'CARNE BOVINA PEITO SEM GORDURA COZIDO',
        valorUnitario: 27.14,
        quantidade: 7
      },
      {
        produtoId: 235,
        nome: 'MELANCIA CRUA',
        valorUnitario: 91.45,
        quantidade: 21
      }
    ],
    valorTotal: 7730.969999999998
  }
]


// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.

db.vendas.aggregate([
	{
		$match: {
			status: { $in: ["ENTREGUE", "EM SEPARACAO"]}
		}
	},
	{ $group: {
		_id: "$clienteId",
		valorTotal: {
			$sum: "$valorTotal"
		}
	}
},
	{ $sort: { valorTotal: -1 } },
	{ $limit: 5 }
]);


// Exercício 9 : Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019 .

db.vendas.aggregate([
  {
	$match: {
      dataVenda: {
				$gte: ISODate('2019-01-01'),
				$lte: ISODate('2019-12-31')
      }
    }
  },
  {
		$group: {
      _id: "$clienteId",
      valorTotal: {
				$sum: "$valorTotal"
      }
    }
  },
  {
		$sort: {
      valotTotal: -1
    }
  },
  {
		$limit: 10
  }
]);

// Exercício 10 : Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
// Dica: O operador $count pode simplificar sua query .

db.vendas.aggregate([
  {
		$group: {
      _id: "$clienteId",
      totalCompras: {
				$sum: 1
      }
    }
  },
  {
		$match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
		$group: {
      _id: null,
      clientes: { $sum: 1 }
    }
  },
  { $project: { _id: 0 } }
]);
// ou
db.vendas.aggregate([
  {
		$group: {
      _id: "$clienteId",
      totalCompras: {
				$sum: 1
      }
    }
  },
  {
		$match: {
      totalCompras: { $gt: 5 }
    }
  },
  {
		$count: 'clientes'
  },
]);
// Exercício 11 : Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020 .

db.vendas.aggregate([
  {
		$match: {
      dataVenda: {
				$gte: ISODate('2020-01-01'),
				$lte: ISODate('2020-03-31')
      }
    }
  },
  {
		$group: {
      _id: "$clienteId",
      totalCompras: {
				$sum: 1
      }
    }
  },
  {
		$match: {
      totalCompras: { $lt: 3 }
    }
  },
  {
		$count: 'clientes'
  }
]);

// Exercício 12 : Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato:

// Copiar
// {
//   "totalVendas": 10,
//   "uf": "SP"
// }

db.vendas.aggregate([
  {
		$match: {
      dataVenda: {
				$gte: ISODate('2020-01-01')
      }
    }
  },
  {
		$lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'dadosCliente'
    }
  },
  {
		$unwind: "$dadosCliente"
  },
  {
		$group: {
      _id: "$dadosCliente.endereco.uf",
      totalVendas: {
				$sum: 1
      }
    }
  },
  {
		$sort: {
      totalVendas: -1
    }
  },
  { $limit: 3 },
  {
		$project: {
      _id: 0,
      uf: "$_id",
      totalVendas: 1
    }
  }
]);


// Exercício 13 : Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato:

// Copiar
// {
//   "_id": "MG",
//   "mediaVendas": 9407.129225352113,
//   "totalVendas": 142
// }

db.vendas.aggregate([
  {
		$match: {
      dataVenda: {
				$gte: ISODate('2019-01-01'),
				$lte: ISODate('2019-12-31')
      }
    }
  },
  {
		$lookup: {
      from: 'clientes',
      localField: 'clienteId',
      foreignField: 'clienteId',
      as: 'cliente'
    }
  },
  {
		$unwind: "$cliente"
  },
  {
		$group: {
      _id: "$cliente.endereco.uf",
      mediaVendas: { $avg: "$valorTotal" },
      totalVendas: { $sum: 1 }
    }
  },
  {
		$project: {
      _id: 0,
      uf: "$_id",
      mediaVendas: 1,
      totalVendas: 1
    }
  },
  {
		$sort: {
      uf: 1
    }
  }
]);

