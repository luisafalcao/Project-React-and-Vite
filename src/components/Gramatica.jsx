/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { listarItens } from "../infra/basededados"

import NovoConteudo from "../components/NovoConteudo"
import Form from "../components/Form"
import ListaGramatica from "./listas/ListaGramatica"
import ListaPronomes from "./listas/ListaPronomes"
import Card from "./Card"

export default function Gramatica() {
    const { id } = useParams();

    const categoria = "gramatica";

    const [gramatica, setGramatica] = useState([]);
    const [gramaticaId, setGramaticaId] = useState("");

    const [pronomes, setPronomes] = useState([]);
    const [pronomesId, setPronomesId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(categoria, id);
            setGramatica(data)
        }

        fetchData()
    }, [gramaticaId])

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens("pronomes", id);
            setPronomes(data)
        }

        fetchData()
    }, [pronomesId])

    return (
        <>
            <div className="container grid">
                <div className="coluna">
                    <ListaGramatica conteudo={gramatica} />
                </div>
                <div className="coluna">
                    <Card classes="container">
                        <div className="coluna">
                            <h4>Pronomes</h4>
                            {/* <ul>
                                <li>Yo</li>
                                <li>Tú</li>
                                <li>Él/Ella</li>
                                <li>Nosotros</li>
                                <li>Vosotros</li>
                                <li>Ellos/Ellas</li>
                            </ul> */}
                            <ListaPronomes conteudo={pronomes}></ListaPronomes>
                        </div>
                        <div className="coluna">
                            <Form
                                setDatabaseId={setPronomesId}
                                idiomaSelecionado={id}
                                categoria="pronomes"
                                campos={[
                                    {
                                        name: "pronome",
                                        type: "text",
                                        maxLength: 10,
                                        required: false,
                                        label: "Pronome",
                                        noLabel: true,
                                    }
                                ]}
                                textoBotao="Adicionar"
                                textoSucesso="Pronome adicionado com sucesso!"
                            />
                        </div>
                    </Card>
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
        </>
    )
}