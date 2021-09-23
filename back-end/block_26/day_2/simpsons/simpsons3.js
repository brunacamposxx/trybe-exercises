const fs = require('fs').promises;

async function filterSimpsons() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));
    // Filtrar o array para remover as personagens que devem ser removidas
		const newArray = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !== '6');
    //Escrever no arquivo o novo array filtrado
		await fs.writeFile('./simpsons.json', JSON.stringify(newArray));

}

