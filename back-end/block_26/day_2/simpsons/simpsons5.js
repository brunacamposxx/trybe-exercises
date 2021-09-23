const fs = require('fs').promises;

async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

		// Adicionar uma nova pessoa ao array de simpsonsFamily
		simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });
		await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);

	}