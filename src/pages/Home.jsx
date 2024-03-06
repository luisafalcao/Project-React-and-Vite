import { useState, useEffect } from "react";
import NovoConteudo from "../components/NovoConteudo";
import Form from "../components/Form";
import ListaIdiomas from "../components/listas/ListaIdiomas";
import Card from "../components/Card";
import { listarItens } from "../infra/basededados";

export default function Home() {
    const database = "idiomas"
    // let { id } = useParams();

    const [idiomas, setIdiomas] = useState([]);
    const [idiomaId, setIdiomaId] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data = await listarItens(database);
            setIdiomas(data);
        }

        fetchData();
    }, [idiomaId]);



    return (
        <main>
            <h2 className="center">meus idiomas</h2>
            <div className="cards">
                <ListaIdiomas conteudo={idiomas} />
                <Card idioma={false}>
                    <NovoConteudo label="Idioma">
                        <Form
                            setDatabaseId={setIdiomaId}
                            database={database}
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
        </main>

    )
}