import { useContext } from "react"
import { useParams } from "react-router-dom"
import { ConjugContext } from "../pages/Idioma"

import NovoConteudo from "./NovoConteudo"
import Form from "./Form"
import ListaConjugacoes from "./listas/ListaConjugacoes"

export default function Conjugacoes() {
    let { id } = useParams();
    const conjugStates = useContext(ConjugContext);
    const categoria = "conjugacoes"

    return (
        <>
            <div className="container">
                <div className="coluna">
                    <ListaConjugacoes
                        categoria={categoria}
                        conteudo={conjugStates.conjugacoes}
                        filtrarConjugacoes={false}
                        conjugacoes={conjugStates.conjugacoes}
                        setConjugacoes={conjugStates.setConjugacoes}
                    />
                </div>
                <div className="coluna">
                    <NovoConteudo label="Conjugação" margin="auto">
                        <Form
                            setDatabaseId={conjugStates.setConjugacoesId}
                            idiomaSelecionado={id}
                            categoria={categoria}
                            campos={[{
                                name: "verboPt",
                                type: "text",
                                maxLength: 100,
                                required: true,
                                label: "Verbo (Português)",
                                noLabel: true,
                            }, {
                                name: "verboId",
                                type: "text",
                                maxLength: 100,
                                required: true,
                                label: "Verbo (Idioma)",
                                noLabel: true,
                            },
                            {
                                name: "pessoaVerbal1",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Primeira Pessoa Singular",
                                noLabel: true,
                            },
                            {
                                name: "pessoaVerbal2",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Segunda Pessoa Singular",
                                noLabel: true,
                            },
                            {
                                name: "pessoaVerbal3",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Terceira Pessoa Singular",
                                noLabel: true,
                            },
                            {
                                name: "pessoaVerbal4",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Primeira Pessoa Plural",
                                noLabel: true,
                            },
                            {
                                name: "pessoaVerbal5",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Segunda Pessoa Plural",
                                noLabel: true,
                            },
                            {
                                name: "pessoaVerbal6",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Terceira Pessoa Plural",
                                noLabel: true,
                            },
                            {
                                name: "tempoVerbal",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Tempo Verbal",
                                noLabel: true,
                            },]}
                            textoBotao="Adicionar"
                            textoSucesso="Nova conjugação com sucesso!"
                        />
                    </NovoConteudo>
                </div>
            </div>
        </>
    )
}