import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { listarItens } from "../infra/basededados";

import NovoConteudo from "../components/NovoConteudo";
import Form from "../components/Form";
import ListaVerbos from "./listas/ListaVerbos";

export default function Verbos() {
    let { id } = useParams();

    const categoria = "verbos"

    const [verbos, setVerbos] = useState([]);
    const [verbosId, setVerbosId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria, id)
            setVerbos(data)
        }

        fetchData()
    }, [verbosId])

    return (
        <>
            <div className="container grid">
                <div className="coluna">
                    <ListaVerbos conteudo={verbos} />
                </div>
                <div className="coluna">
                    <NovoConteudo label="Verbo">
                        <Form
                            setDatabaseId={setVerbosId}
                            idiomaSelecionado={id}
                            categoria={categoria}
                            campos={[
                                {
                                    name: "infinitivoPt",
                                    type: "text",
                                    maxLength: 100,
                                    required: true,
                                    label: "Infinitivo (PT)"
                                },
                                {
                                    name: "infinitivoId",
                                    type: "text",
                                    maxLength: 100,
                                    required: true,
                                    label: "Infinitivo"
                                },
                                {
                                    name: "tempoVerbal",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Tempo Verbal",
                                    group: true,
                                    groupTitle: true,
                                },
                                {
                                    name: "pessoaVerbal1",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Primeira Pessoa Singular",
                                    group: true,
                                },
                                {
                                    name: "pessoaVerbal2",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Segunda Pessoa Singular",
                                    group: true,
                                },
                                {
                                    name: "pessoaVerbal3",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Terceira Pessoa Singular",
                                    group: true,
                                },
                                {
                                    name: "pessoaVerbal4",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Primeira Pessoa Plural",
                                    group: true,
                                },
                                {
                                    name: "pessoaVerbal5",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Segunda Pessoa Plural",
                                    group: true,
                                },
                                {
                                    name: "pessoaVerbal6",
                                    type: "text",
                                    maxLength: 100,
                                    required: false,
                                    label: "Terceira Pessoa Plural",
                                    group: true,
                                },

                            ]}
                            textoBotao="Adicionar"
                            textoSucesso="Verbo adicionado com sucesso!"
                        />
                    </NovoConteudo>
                </div>
            </div>
        </>
    )
}