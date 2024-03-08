import { useState, useEffect } from "react";
import NovoConteudo from "../components/NovoConteudo";
import Form from "../components/Form";
import ListaIdiomas from "../components/listas/ListaIdiomas";
import Card from "../components/Card";
import { listarIdiomas } from "../infra/basededados";

export default function Home() {
    const categoria = "idiomas"

    const [idiomas, setIdiomas] = useState([]);
    const [idiomaId, setIdiomaId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarIdiomas(categoria);
            setIdiomas(data);
        }

        fetchData();
    }, [idiomaId]);

    return (
        <>
            <div className="cards">
                <ListaIdiomas conteudo={idiomas} />
                <Card idioma={false}>
                    <NovoConteudo label="Idioma" margin="auto">
                        <Form
                            setDatabaseId={setIdiomaId}
                            categoria={categoria}
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
                </Card>

            </div>
        </>

    )
}