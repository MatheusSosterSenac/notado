import React from "react";
import { Card } from "react-bootstrap";
import "../styles/instrumentos.css";

const ProductCard = () => {
    const instrumentos = [
        {
            descricao: "Gibson, Fender, Takamine, Yamaha e +",
            titulo: "Violão",
            url: "https://cliqueutil.com/wp-content/uploads/2022/01/show_image.jpg",
            onclick: function(){
                window.open("https://www.multisom.com.br/instrumentos-musicais-ms/cordas-ms/violao-ms")
            }
        },

        {
            descricao: "Gibson, Fender, Epiphone, Yamaha e +",
            titulo: "Guitarra",
            url: "https://garajedelrock.com/wp-content/uploads/2022/02/slash-gibson-les-paul.jpg",
            onclick: function(){
                window.open("https://www.madeinbrazil.com.br/cordas-e-acessorios/guitarra")
            }
        },

        {
            descricao: "Gibson, Fender, Rickebacker, Yamaha e +",
            titulo: "Contrabaixo",
            url: "https://www.ruadireita.com/info/img/baixo-tons-mais-fortes.jpg",
            onclick: function(){
                window.open("https://www.madeinbrazil.com.br/cordas-e-acessorios/contrabaixo")
            }
        },

        {
            descricao: "Yamaha, Bösendorfer, Steinway & Sons, Fazioli e +",
            titulo: "Piano",
            url: "https://64.media.tumblr.com/717bb9a59f931825470ecad5c990aa07/tumblr_p1semgS3h21wykjojo1_500.pnj",
            onclick: function(){
                window.open("https://www.madeinbrazil.com.br/pianos-e-teclados/pianos")
            }
        },

        {
            descricao: "Brescia, Stradivarius, Yamaha, Eagle e +",
            titulo: "Violino",
            url: "https://static.tumblr.com/6e88086244aa6c9d533eb3ac767d5205/st7j3s2/VEmo3chp6/tumblr_static_filename_2048_v2.jpg",
            onclick: function(){
                window.open("https://hpgmusical.com/violino/violinos")
            }
        },

        {
            descricao: "Yamaha, Harmonics, Mingzhe, Vogga e +",
            titulo: "Flauta",
            url: "https://64.media.tumblr.com/02fab557e43a133ac6e832146e6c23d4/tumblr_mtno9lyDWG1rq2a8qo1_1280.jpg",
            onclick: function(){
                window.open("https://www.multisom.com.br/instrumentos-musicais-ms/sopro-ms/flautas-ms")
            }
        },



    ];

    return (
        <div className="instrumentos">
            {instrumentos.map((instrumento, index) => (
                
                <button class="botao"><Card key={index} className="produto" onClick={instrumento.onclick}>
                    <Card.Img variant="top" src={instrumento.url} />
                    <Card.Body>
                        <Card.Title>{instrumento.titulo}</Card.Title>
                        <Card.Text>{instrumento.descricao}</Card.Text>
                    </Card.Body>
               </Card></button>
            ))}
        </div>
    );
};

export default ProductCard;
