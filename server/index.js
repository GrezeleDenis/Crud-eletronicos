const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudeletro"
})

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
    // const category = req.body.category;
    const name = req.body.name;
    const price = req.body.price;
    const date = req.body.date;
    const color = req.body.color;

    console.log(name, price, date, color)
    

    let sqlInsert = "INSERT INTO products (nome, preco, data, cor) VALUES (?,?,?,?)";
    db.query(sqlInsert, [name, price, date, color], (err, result) => {
        console.log(err);
        res.send(result);
    });

});

app.get("/getCard", (req, res) => {
    let sqlSelect = "SELECT * FROM products";

        db.query(sqlSelect, (err, result) => {
            if (err) console.log(err);
            else res.send(result);
        });
    });

// app.post("/", (req, res) => {
//     let SQL =
//      "INSERT INTO produtos (nome, preco, data, cor) VALUES ('Nokia', '150', '2019', 'preto')";
//     db.query(SQL, (err, res) => {
//         console.log(err);
//     })
// });


app.listen(3001,()=> {
    console.log('Rodando servidor na porta 3001');
})