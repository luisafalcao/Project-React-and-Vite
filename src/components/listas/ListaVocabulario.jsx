/* eslint-disable react/prop-types */

export default function ListaVocabulario({ conteudo }) {
    return (
        <div className="lista">
            {conteudo.map((item, index) => {
                const { portugues, traducao } = item
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