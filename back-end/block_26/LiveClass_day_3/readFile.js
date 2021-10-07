const fs = require('fs').promises;

module.exports = {
	readFile: async (fileName) => {
		const content = await fs.readFile('fileName', 'utf-8').catch(() => null)
		return content

		// ou try{} catch{}
	}
}