/* eslint-disable react/prop-types */
import Box from "../components/Box"
import NovoConteudo from "../components/NovoConteudo"
import Form from "../components/Form"
import Card from "../components/Card"

export default function Gramatica() {
    return (
        <main>
            <div className="container grid">
                <div className="coluna">
                    <Box titulo={"Regra 1"} categoria="regra" conteudo="Conteúdo"></Box>
                    <Box titulo={"Alguma regra"} categoria="regra" conteudo="Conteúdo"></Box>
                    <Box titulo={"Outra regra"} categoria="regra" conteudo="Conteúdo"></Box>
                    <NovoConteudo label="Regra">
                        <Form
                            database="gramatica"
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
                        />
                    </NovoConteudo>
                </div>
                <div className="coluna">
                    <Card
                        titulo="Pronomes"
                        ordemInvertida={true}
                    >
                        <ul>
                            <li>Eu</li>
                            <li>Tu</li>
                            <li>Ele</li>
                            <li>Nós</li>
                            <li>Vós</li>
                            <li>Eles</li>
                        </ul>
                        <NovoConteudo label="Pronome">
                            <Form
                                database="pronomes"
                                campos={[
                                    {
                                        name: "pronomePt",
                                        type: "text",
                                        maxLength: 10,
                                        required: true,
                                        label: "Pronome (PT)"
                                    },
                                    {
                                        name: "pronomeId",
                                        type: "text",
                                        maxLength: 10,
                                        required: true,
                                        label: "Pronome"
                                    },
                                ]}
                                textoBotao="Adicionar"
                            />
                        </NovoConteudo>
                    </Card>

                </div>
            </div>
        </main>
    )
}