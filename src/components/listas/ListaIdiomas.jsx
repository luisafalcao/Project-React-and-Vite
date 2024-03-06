/* eslint-disable react/prop-types */
import "./ListaVocabulario.css"
import Card from "../Card"

export default function ListaIdiomas({ conteudo, handleClick }) {
    return (
        <div className="cards">
            {
                conteudo.map((idioma, index) => (
                    <Card key={index} info={idioma} titulo={idioma.idioma} handleClick={handleClick} tipo="botao" />
                ))
            }
        </div>
    )
}