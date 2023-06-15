import React from "react";
import { useState, useEffect } from "react";
import Pesquisa from "./Pesquisa";

function Livro() {
  const url = "https://64836ad6f2e76ae1b95c73d3.mockapi.io/livro";

  const [listaOrigem, setListaOrigem] = React.useState([]);

  React.useEffect(() => {
    async function consulta() {
      const res = await fetch(url);
      const dados = await res.json();

      setListaOrigem(dados);
    }

    consulta();
  }, []);

  const item = listaOrigem[0] || {};

  return (
    <>
    </>
  );
}

export default Livro;
