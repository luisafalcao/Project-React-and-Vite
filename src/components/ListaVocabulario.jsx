/* eslint-disable react/prop-types */
import "./ListaVocabulario.css"

export default function ListaVocabulario({ conteudo }) {
    return (
        <div>
            {conteudo.map((item, index) => {
                const { portugues, traducao, categorias } = item
                return (
                    <div key={index}>
                        <h4 key={index}>{portugues} = {traducao}</h4>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}