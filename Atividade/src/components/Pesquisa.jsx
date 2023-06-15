import React, { useState, useEffect } from "react";
import Favorito from "./Favorito";
import Deletar from "./Delete";
import axios from "axios";

function Pesquisa({ listaOrigem }) {
  const [texto, setTexto] = useState("");
  const [lista, setLista] = useState([]);
  const url = `https://64836ad6f2e76ae1b95c73d3.mockapi.io/livro/`;

  function handleTexto(evento) {
    setTexto(evento.target.value);
  }

  useEffect(() => {
    const novo = listaOrigem.filter((item) =>
      item.titulo.toLowerCase().includes(texto.toLowerCase())
    );

    novo.sort(cbOrdenacao);
    setLista(novo);
  }, [texto, listaOrigem]);

  function cbOrdenacao(a, b) {
    if (a.favorito < b.favorito) return 1;
    if (a.favorito > b.favorito) return -1;
    return 0;
  }

  const handleFavorito = (item) => {
    const novo = { ...item, favorito: !item.favorito };
    const marcar = async () =>
    await axios.put(
      `https://64836ad6f2e76ae1b95c73d3.mockapi.io/livro/${item.id}`,
      novo
    );

    marcar();

    function cb(atual) {
      return atual.map((i) => (i.id === item.id ? novo : i)).sort(cbOrdenacao);
    }
    setLista(cb);
  };

  const handleDelete = (item) => {
  
    const del = async () => {
      await axios.delete(
        `https://64836ad6f2e76ae1b95c73d3.mockapi.io/livro/${item.id}`
      );
    };
  
    const nova = lista.filter((i) => i.id !== item.id);
    setLista(nova);
  
    del();
  };
  

  return (
    <div>
      <input
        type="text"
        placeholder="Pesquisar"
        value={texto}
        onChange={handleTexto}
      />
      <ul>
        {lista.map((item) => (
          <li key={item.id}>
            {console.log("aaaaaa")}
            <div className="foto">
              <img
                src={item.foto}
                style={{ width: "100px" }}
                alt={item.titulo}
              />
            </div>
            <div className="livroInfo">
              Título: {item.titulo}
              <br />
              Autor: {item.autor}
              <br />
              <div className="botoes">
                <Deletar item={item} handleDel={handleDelete} />
                <Favorito item={item} handleClique={handleFavorito} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pesquisa;
