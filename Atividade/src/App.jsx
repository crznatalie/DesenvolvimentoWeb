import { useState, useEffect } from 'react'
import './App.css'
import Livro from './components/Livro'
import Pesquisa from './components/Pesquisa'
import axios from 'axios';

function App() {
  const [listaOrigem, setListaOrigem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://64836ad6f2e76ae1b95c73d3.mockapi.io/livro');
        setListaOrigem(response.data);
      } catch (error) {
        console.log('Erro ao buscar os dados do servidor:', error);
      }
      }

      fetchData();
    }, []);


  return (
    <>
      <h1>Livros</h1>
      <Pesquisa listaOrigem={listaOrigem} />
      <div className="card">
        <Livro listaOrigem={listaOrigem} />
      </div>
        <p className="read-the-docs">@ Natalie 2023</p>
    </>
  );
}

export default App
