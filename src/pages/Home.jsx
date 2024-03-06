import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NovoConteudo from "../components/NovoConteudo";
import Form from "../components/Form";
import ListaIdiomas from "../components/listas/ListaIdiomas";
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

    let navigate = useNavigate();

    function handleClick(event) {
        navigate(`/idioma/${event.target.id.toLowerCase()}/gramatica`)
    }

    return (
        <main>
            <h2 className="center">meus idiomas</h2>
            <div>
                <ListaIdiomas conteudo={idiomas} handleClick={handleClick} />
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
            </div>
        </main>

    )
}