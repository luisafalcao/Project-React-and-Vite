import { useParams } from "react-router-dom"
import ListaVocabulario from "../components/ListaVocabulario"
import NovoConteudo from "../components/NovoConteudo"
import Form from "../components/Form"

export default function Vocabulario() {
    let { id } = useParams();

    const palavras = [{
        portugues: "Gato",
        traducao: "Chat",
        categorias: ["animais", "outra"]
    }, {
        portugues: "Queijo",
        traducao: "Fromage",
        categorias: ["comidas"]
    }]

    return (
        <main>
            <div className="container-flex half">
                <ListaVocabulario conteudo={palavras} />
                <NovoConteudo>
                    <Form
                        database="vocabulario"
                        campos={[
                            {
                                name: "palavraTraducao",
                                type: "text",
                                maxLength: 50,
                                required: true,
                                label: "Palavra"
                            },
                            {
                                name: "palavraPortugues",
                                type: "text",
                                maxLength: 50,
                                required: true,
                                label: "Palavra em Português"
                            },
                        ]}
                        textoBotao="Adicionar"
                    />
                </NovoConteudo>
            </div>
        </main>
    )
}