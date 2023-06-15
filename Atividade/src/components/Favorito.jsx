import React from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

function Favorito(props) {
  return (
    <i
      onClick={() => props.handleClique(props.item)}
      style={{ cursor: "pointer" }}
    >
      <button>
        {props.item.favorito ? (
          <HeartFill style={{ color: "pink" }} />
        ) : (
          <Heart />
        )}
      </button>
    </i>
  );
}

export default Favorito;
