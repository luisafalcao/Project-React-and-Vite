/* eslint-disable react/prop-types */
import "./Card.css"

export default function Card({ titulo, tipo, idioma, children, handleClick, ordemInvertida }) {
    console.log(titulo)
    return (
        <div className={`card ${tipo === "form" && "form"} ${ordemInvertida && "invertida"}`}>
            {children}
            {tipo === "botao" &&
                <button onClick={handleClick} id={titulo} className="card-botao">
                    {idioma}
                </button>
            }
            {!idioma &&
                <p className="card-titulo">{titulo}</p>
            }
        </div>
    )
}