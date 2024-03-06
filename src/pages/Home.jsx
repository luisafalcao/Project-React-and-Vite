import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import NovoConteudo from "../components/NovoConteudo";
import Form from "../components/Form";

export default function Home() {
    let navigate = useNavigate();

    function handleClick(event) {
        navigate(`/idioma/${event.target.id}/gramatica`)
    }

    const idiomas = ["Italiano", "Espanhol", "Coreano"];

    return (
        <main>
            <h2 className="center">meus idiomas</h2>
            <div>
                <div className="cards">
                    {
                        idiomas.map((idioma, index) => (
                            <Card key={index} titulo={idioma} handleClick={handleClick} tipo="botao" />
                        ))
                    }
                </div>
                <NovoConteudo label="Idioma">
                    <Form
                        campos={[
                            {
                                name: "idioma",
                                type: "text",
                                maxLength: 20,
                                required: true
                            }
                        ]}
                        textoBotao="Adicionar"
                        textoSucesso="Idioma adicionado com sucesso!"
                    />
                </NovoConteudo>
            </div>
        </main>

    )
}