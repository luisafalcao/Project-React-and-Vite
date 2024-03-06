// import { useParams } from "react-router-dom"
import Box from "../components/Box";
import NovoConteudo from "../components/NovoConteudo";
import Form from "../components/Form";

export default function Verbos() {
    // let { id } = useParams();
    const verbos = ["Jogar", "Fazer", "Viajar", "Jogar", "Fazer", "Viajar"]

    return (
        <main className="verbos">
            <div className="container flex">
                {
                    verbos.map((verbo, index) => (
                        <Box key={index} titulo={verbo} categoria="verbos"></Box>
                    ))
                }
                <NovoConteudo label="Verbo">
                    <Form
                        database="verbos"
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
                    />
                </NovoConteudo>
            </div>
        </main>
    )
}