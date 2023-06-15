import React from "react";

function Deletar(props) {
  return (
    <i
      onClick={() => props.handleDel(props.item)}
      style={{ cursor: "pointer" }}
    >
      <button>Excluir</button>
    </i>
  );
}

export default Deletar;
