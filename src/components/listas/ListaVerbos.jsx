/* eslint-disable react/prop-types */
import Box from "../Box"

export default function ListaVerbos({ conteudo }) {

    return (conteudo.map((verbo, index) => {
        const { infinitivoId } = verbo;
        return (
            <Box key={index} titulo={infinitivoId} categoria="verbos">
                <p>fsaasa</p>
            </Box>
        )
    }))

}