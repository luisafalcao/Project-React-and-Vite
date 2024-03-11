/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ConjugContext } from "../../pages/Idioma"
import Box from "../Box"
import ListaConjugacoes from "./ListaConjugacoes"

export default function ListaVerbos({ conteudo, categoria }) {
    const conjugStates = useContext(ConjugContext);

    return (conteudo.map((verbo, index) => {
        const { infinitivoId, infinitivoPt } = verbo;

        return (
            <Box key={index} titulo={[infinitivoId, infinitivoPt]} categoria={categoria}>
                <ListaConjugacoes verbo={infinitivoId} filtrarConjugacoes={true} conjugacoes={conjugStates.conjugacoes} setConjugacoes={conjugStates.setConjugacoes} conjugacoesId={conjugStates.conjugacoesId} setConjugacoesId={conjugStates.setConjugacoesId} />
            </Box>
        )
    }))

}