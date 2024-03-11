import { useState, useEffect } from "react";
import { useCollapse } from "react-collapsed";
import NovoConteudo from "../components/NovoConteudo";
import Form from "../components/Form";
import ListaIdiomas from "../components/listas/ListaIdiomas";
import Card from "../components/Card";
import { listarIdiomas } from "../infra/basededados";
import logo from '../assets/idiomas.svg'

export default function Home() {
    const { getCollapseProps, getToggleProps } = useCollapse()
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
        <div className="home-page">
            <div className="cards">
                <Card>
                    <img src={logo} className="logo" alt="Logo"  {...getToggleProps()} />
                    <Form {...getCollapseProps()}
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
                </Card>
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
        </div>

    )
}