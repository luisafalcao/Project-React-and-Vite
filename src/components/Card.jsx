/* eslint-disable react/prop-types */
import "./Card.css"

export default function Card({ titulo, tipo, children, handleClick }) {
    return (
        <div className={`card ${tipo === "form" && "form"}`}>
            {children}
            {tipo === "botao" ?
                <button onClick={handleClick} id={titulo}>
                    {titulo}
                </button>
                :
                <p>{titulo}</p>
            }
        </div>
    )
}