const fs = require('fs').promises;

async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

		// Criar um novo array apenas com os membros da família
		const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));

		// Escrever o novo arquivo no disco

		await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

