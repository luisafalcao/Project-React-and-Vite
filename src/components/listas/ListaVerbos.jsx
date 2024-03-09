/* eslint-disable react/prop-types */
import Box from "../Box"
import Conjugacoes from "../Conjugacoes";

export default function ListaVerbos({ conteudo, categoria }) {
    return (conteudo.map((verbo, index) => {
        const { infinitivoId } = verbo;

        return (
            <Box key={index} titulo={infinitivoId} categoria="verbos">
                <Conjugacoes categoria={categoria} verbo={infinitivoId} />
            </Box>
        )
    }))

}