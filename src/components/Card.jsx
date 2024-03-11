/* eslint-disable react/prop-types */
import "./Card.css"

export default function Card({ titulo, tipo, idioma, children, handleClick }) {
    return (
        <div className={`card ${tipo === "form" && "form"}`}>
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