CREATE DATABASE IF NOT EXISTS Biblioteca;
USE Biblioteca;

-- cria tabela autor com autor_id sendo uma chave primária (que por padrão são NOT NULL), de número inteiro, que se auto incrementa e nome uma string;
CREATE TABLE autor(
	autor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

-- como usar
SELECT * FROM autor;

CREATE TABLE Categoria(
	categoria_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

SELECT * FROM categoria;

CREATE TABLE cliente(
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45)
);

SELECT * FROM cliente;

-- referencia as chaves estrangeiras que constam na tabela livro
CREATE TABLE livro(
		livro_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(45),
    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES autor (autor_id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria (categoria_id)
);

SELECT * FROM livro;

-- Nessa tabelas de junção, livro_id e cliente_id são chaves primarias compostas, são tanto chaves estrangeiras como primarias.
CREATE TABLE historico(
		livro_id INT NOT NULL,
    cliente_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (livro_id, cliente_id),
    FOREIGN KEY (livro_id) REFERENCES livro(livro_id),
    foreign key (cliente_id) REFERENCES cliente(cliente_id)
);
 
 select * from historico