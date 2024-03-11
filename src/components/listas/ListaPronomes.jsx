/* eslint-disable react/prop-types */
export default function ListaPronomes({ conteudo }) {
    return (
        <ul>
            {conteudo.map((item, index) => {
                const { pronome } = item
                return (
                    <li key={index}>
                        {pronome}
                    </li>

                )
            })}
        </ul>
    )
}