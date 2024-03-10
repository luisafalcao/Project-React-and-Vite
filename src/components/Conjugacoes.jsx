// import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { listarItens } from "../infra/basededados"
import "./Vocabulario.css"

import NovoConteudo from "./NovoConteudo"
import Form from "./Form"
import ListaConjugacoes from "./listas/ListaConjugacoes"

export default function Conjugacoes() {
    let { id } = useParams();

    const categoria = "conjugacoes";

    const [conjugacoes, setConjugacoes] = useState([]);
    const [conjugacoesId, setConjugacoesId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria, id);
            setConjugacoes(data);
        }

        fetchData();
    }, [conjugacoesId])

    return (
        <>
            <div className="container grid">
                <div className="coluna">
                    <ListaConjugacoes conteudo={conjugacoes} />
                </div>
                <div className="coluna">
                    <NovoConteudo label="Conjugação">
                        <Form
                            setDatabaseId={setConjugacoesId}
                            // subCategoria={verbo}
                            idiomaSelecionado={id}
                            categoria={categoria}
                            campos={[{
                                name: "verbo",
                                type: "text",
                                maxLength: 100,
                                required: true,
                                label: "Verbo",
                                noLabel: true,
                            }, {
                                name: "tempoVerbal",
                                type: "text",
                                maxLength: 100,
                                required: false,
                                label: "Tempo Verbal",
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
                            }]}
                            textoBotao="Adicionar"
                            textoSucesso="Nova conjugação com sucesso!"
                        />
                    </NovoConteudo>
                </div>
            </div>
        </>
    )
}