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
        <main className="verbos">
            <div className="container flex">
                <ListaVerbos conteudo={verbos} />
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
                                required: true,
                                label: "Tempo Verbal"
                            },

                        ]}
                        textoBotao="Adicionar"
                        textoSucesso="Verbo adicionado com sucesso!"
                    />
                </NovoConteudo>
            </div>
        </main>
    )
}