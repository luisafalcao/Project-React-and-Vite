/* eslint-disable react/prop-types */
import "./Card.css"

export default function Card({ titulo, tipo, children, handleClick, ordemInvertida, info }) {
    return (
        <div className={`card ${tipo === "form" && "form"} ${ordemInvertida && "invertida"}`}>
            {children}
            {tipo === "botao" ?
                <button onClick={handleClick} id={titulo} className="card-botao">
                    {titulo}
                </button>
                :
                <p className="card-titulo">{titulo}</p>
            }
        </div>
    )
}