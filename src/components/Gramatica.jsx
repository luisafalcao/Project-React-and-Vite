/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { listarItens } from "../infra/basededados"

import NovoConteudo from "../components/NovoConteudo"
import Form from "../components/Form"
import ListaGramatica from "./listas/ListaGramatica"

export default function Gramatica() {
    const { id } = useParams();

    const categoria = "gramatica";

    const [gramatica, setGramatica] = useState([]);
    const [gramaticaId, setGramaticaId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria, id);
            setGramatica(data)
        }

        fetchData()
    }, [gramaticaId])

    return (
        <main>
            <div className="container grid">
                <div className="coluna">
                    <ListaGramatica conteudo={gramatica} />
                    <NovoConteudo label="Regra">
                        <Form
                            setDatabaseId={setGramaticaId}
                            idiomaSelecionado={id}
                            categoria={categoria}
                            campos={[
                                {
                                    name: "regra",
                                    type: "text",
                                    maxLength: 100,
                                    required: true,
                                    label: "Regra"
                                },
                                {
                                    name: "conteudo",
                                    type: "textarea",
                                    maxLength: 256,
                                    required: false,
                                    label: "Conteúdo"
                                },
                            ]}
                            textoBotao="Adicionar"
                            textoSucesso="Regra adicionada com sucesso!"
                        />
                    </NovoConteudo>
                </div>

            </div>
        </main>
    )
}