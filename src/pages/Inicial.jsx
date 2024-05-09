import React from "react";
import { Link } from "react-router-dom"; // Importe o Link para criar links internos
import "../styles/inicial.css";

export default function Inicial() {
  return (
    <div className="container">
      <h1 className="titulo">Seja bem-vindo ao Notadó</h1>
      <div className="destaque-container">
        <h2>Itens em Destaque</h2>
        <div className="destaque-item">
          <img className="foto" src="https://http2.mlstatic.com/D_NQ_NP_909299-MLU73363656726_122023-O.webp" alt="Item em Destaque 2" />
          <h3>Violino Mozart</h3>
          <h5>R$ 469,99</h5>
          <p>Tamanho do violino: 4/4
            Suas medidas são: 58cm x 21cm x 4cm.
            Inclui arco.
            Inclui 1x nota fiscal eletrônica 1x estojo luxo preto 4x micro afinadores (fixos) 1x arco madeira cedro com crina animal 1x cavalete em madeira pinho 1x breu 4x cordas 1x estandarte 4x cravelhas 1x queixeira.
            O corpo é fabricado em maple.
            O espelho é fabricado em hardwood.</p>
          <Link to="/produtos/" className="saiba-mais-link">Saiba mais</Link>
        </div>
        <div className="destaque-item">
          <img className="foto" src="https://http2.mlstatic.com/D_NQ_NP_920738-MLA74651546844_022024-O.webp" alt="Item em Destaque 2" />
          <h3>Violão Tagima</h3>
          <h5>R$ 649,99</h5>
          <p>Orientação da mão: Destro
            Construída em tília.
            Acabamento de brilhante.
            Forma do corpo: folk.
            O comprimento da escala é de 43mm.
            Possui 6 cordas de metal.
            Possui conector Jack de saída.
            Quantidade de trastes: 20.</p>
          <Link to="/produtos/" className="saiba-mais-link">Saiba mais</Link>
        </div>
      
    </div>
    </div>
  );
}
