// npm init -y
// npm i express
// npm i nodemon -D // alterar em package.json tbm "   // "dev": "nodemon index.js"
// npm i body-parser
// module.exports = function// require
// ----------------------------- Antes de iniciar;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const books = [
	{ id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
	{ id: 2, title: 'Dune', author: 'Frank Herbert' },
	{ id: 3, title: 'Foundation', author: 'Isaac Asimov' },
	{ id: 4, title: 'The Man in The High Castle', author: 'Philip K Dick' },
	{ id: 5, title: '1984', author: 'George Orwell' },
	{ id: 6, title: 'Brave New World', author: 'Aldous Huxley' }
];

app.post('/books', (req, res) => {
	const token = req.headers.authorization; // pega o valor que enviei pelo postman;

	if(token !== 'secret') {
		return res.status(401).json({ message: "Unauthorized"}) // status nao autorizado;
	}
	
	const { id, title, author } =  req.body; // validação: guardar apenas id, title, author que vem do req.body;

	if(!id) {
		return res.status(400).json({message: 'Id cannot be blank!'});
	}
	if(!title) {
		return res.status(400).json({message: 'Title cannot be blank!'});
	}
	if(!author) {
		return res.status(400).json({message: 'Author cannot be blank!'});
	}
	
	books.push({id, title, author}); // guardar apenas id, title, author;
	return res.status(201).json({message: "Book created!"});
})



app.put('/books/:id', (req, res) => {
	const {id} = req.params;
	const {title, author} = req.body;
	const bookIndex = book.findIndex((b) => b.id === Number(id));

	if(bookIndex === -1) {
		return res.status(404).send();
	}
	book[bookIndex] = { id: Number(id), title, author}; // id: number(id) convert id para tipo number e não string.
	return res.status(204).end();  // no content
})


app.listen(3000, () => console.log('Minha primeira API na porta 3000'));