CREATE TABLE crudeletro.products (
	nome varchar(100) NOT NULL,
	id INT(11) auto_increment NULL,
	preco DECIMAL(14,2) NULL,
	`data` INT NULL,
	cor varchar(100) NULL,
	CONSTRAINT products_pk PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_general_ci;
