// npm init -y
// npm i express
// npm i nodemon -D // alterar em package.json tbm
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


// http://localhost:3000/books/search?author=George Orwell
app.get('/books/search', (req, res) => {
	const author =  req.query.author;
	const filteredBooks = books.filter((b) => b.author === author);

	return res.status(200).json({books: filteredBooks});
})

app.get('/books/:id', (req, res) => {
	const id =  req.params.id;

	const book = books.find((book) => book.id === Number(id));

	if(!book) {
		return res.status(404).json({message: 'Book not found'})
	}

	return res.status(200).json(book);
})

app.get('/books', (req, res) => {
	res.json({ books }); // retorna um objeto json com os dados de books;
	//res.send('GET /BOOKS')
})

app.post('/books', (req, res) => {
	// const book = req.body; // instalar body-parser
	// books.push(book);

	const token = req.headers.authorization; // pega o valor que enviei pelo postman;

	if(token !== 'super-senha') {
		return res.status(401).json({ message: "Acesso não autorizado"}) // status nao autorizado;
	}

	const { id, title, author } =  req.body; // validação: guardar apenas id, title, author que vem do req.body;
	books.push({id, title, author}); // guardar apenas id, title, author;
	
	return res.status(201).json({message: "Book created!"});
	// res.send('POST /BOOKS')
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
	// res.send('PUT /BOOKS')

})

app.delete('/books/:id', (req, res) => {
	const { id } = req.params;
	const bookIndex = book.findIndex((b) => b.id === +id); // +id é o mesmo que Number(id); converte para inteiro
	
	if (bookIndex === -1) {
		return res.status(404).send();
	}
	
	books.splice(bookIndex, 1);
	return res.status(204).send();

	// res.send('DELETE /BOOKS')

})


app.listen(3000, () => console.log('Minha primeira API na porta 3000'));