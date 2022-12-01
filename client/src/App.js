import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import Card from './components/card';

export function App() {
  const [listProducts, setListProducts] = useState();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [color, setColor] = useState();

  console.log('listProducts', listProducts);

  



  
  const handleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      name: name,
      price: parseFloat(price),
      date: Number.parseInt(date),
      color: color,
    }).then((response) => {
      console.log(response);
      search();


    })

  };

  useEffect(() => {
    search();
  }, []);
  

  const search = () => {
    Axios.get('http://localhost:3001/getCard').then((response) => {
      setListProducts(response.data);
    });
  };


  return (
    <div className="app--container">
      <div className="register--container">
        <h1 className="register--tittle">Cadastro de Eletrônicos</h1>

        {/* <select name="category" placeholder="Categoria" className="register--input">Categoria
        <option selectedvalue="category">Selecione a Categoria</option>
        <option value="network">Rede/internet</option>
        <option value="smart">Celular</option>
        <option value="laptop">Notebook</option>
        <option value="tv">Televisão</option>
        <option value="pf">Periférico</option>
        onChange={e => handleChangeValues(e.target.value)}
        </select> */}

        <input type = "text" 
        name="name" 
        placeholder = "Nome do produto"
        className="register--input" 
        onChange={e => setName(e.target.value)}  
        />
        <input type = "text" 
        name="price" 
        placeholder = "Preço (R$)"
        className="register--input" 
        onChange={e => setPrice(e.target.value)}  
        />

        <input type = "text" 
        name="date" 
        placeholder = "Ano do Modelo"
        className="register--input" 
        onChange={e => setDate(e.target.value)}  
        />

        <input type = "text" 
        name="color" 
        placeholder = "Cor"
        className="register--input" 
        onChange= { e=> setColor(e.target.value
        )}
        />

        <button className="register--button"
         onClick={() => handleClickButton()}
         >
          Cadastrar
         </button>
      </div>
        {typeof listProducts !== "undefined" && 
          listProducts.map((setListProducts) => {
            return <Card key={setListProducts.id}
            listCard={listProducts} setListProducts=
            {setListProducts}
            id={setListProducts.id}
            name={setName.name}
            price={setPrice.price}
            date={setDate.date}
            color={setColor.color}
            ></Card>;
          })}
    </div>
  );
}

export default App;
