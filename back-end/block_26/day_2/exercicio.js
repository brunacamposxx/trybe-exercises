function recebeParametro(a, b, c) {
	return new Promise((resolve, reject) => {
	if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
		reject("Informe apenas números");

	const resultado = (a + b) * c;
		if (resultado < 50) {
			return reject('Valor muito baixo');
		}

	resolve(resultado);
	});
}

recebeParametro(10, 10, 10)
	.then(resolve => console.log(resolve))
	.catch(error => console.log(error))

recebeParametro(1, 1, 'a')
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

recebeParametro(1, 1, 1)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

function gerarNumRandom() {
	return  Math.floor(Math.random() * 100 + 1);
}


/* Criamos um novo array de 3 posições
   * e utilizamos o `map` para gerar um número aleatório
   * para cada posição do Array
   */
function chamaRecebeParam(){
	const randomNum = Array.from({ length: 3}).map(gerarNumRandom);

	
recebeParametro(...randomNum)
.then(resultado => console.log(resultado))
.catch(err => console.log(err.message))
}
