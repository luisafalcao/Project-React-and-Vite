/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import "./ListaVocabulario.css"
import Card from "../Card"

export default function ListaIdiomas({ conteudo }) {
    let navigate = useNavigate();

    function handleClick(event) {
        navigate(`/idioma/${event.target.id.toLowerCase()}/gramatica`)
    }

    return (
        conteudo.map((idioma, index) => (
            <Card key={index} idioma={idioma.idioma} titulo={idioma.id} handleClick={handleClick} tipo="botao" />
        ))
    )
}