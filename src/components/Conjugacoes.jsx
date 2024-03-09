import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ListaConjugacoes from "./listas/ListaConjugacoes"
import NovoConteudo from "./NovoConteudo"
import Form from "./Form"
import { listarItens } from "../infra/basededados"

export default function Conjugacoes({ categoria, verbo }) {
    const { id } = useParams()

    // const [conjugacao, setConjugacao] = useState([]);
    // const [conjugacaoId, setConjugacaoId] = useState("");

    // useEffect(() => {
    //     async function fetchData() {
    //         const data = await listarItens(categoria, id)
    //         setConjugacao(data)
    //     }

    //     fetchData()
    // }, [conjugacaoId])
    const conteudoTemporario = [
        {
            "conjugacao": "Je fait"
        },
        {
            "conjugacao": "Tu fais"
        },
        {
            "conjugacao": "Il fait"
        },
        {
            "conjugacao": "Nous faisons"
        },
        {
            "conjugacao": "Vous faites"
        },
        {
            "conjugacao": "Ils font"
        },
    ]

    return (
        <>
            <ListaConjugacoes conteudo={conteudoTemporario} />
            <NovoConteudo label="Conjugação">
                <Form
                    // setDatabaseId={setConjugacaoId}
                    subCategoria={verbo}
                    idiomaSelecionado={id}
                    categoria={categoria}
                    campos={[{
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
                    textoSucesso="Verbo adicionado com sucesso!"
                />
            </NovoConteudo>

        </>
    )
}