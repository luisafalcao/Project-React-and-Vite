import { useState, createContext } from "react";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Layout.css"
import Navbar from "../components/Navbar";

export const ConjugContext = createContext();

export default function Idioma() {
    const { id } = useParams();

    const [conjugacoes, setConjugacoes] = useState([]);
    const [conjugacoesId, setConjugacoesId] = useState("");

    return (
        <>
            <div className="nav-wrapper">
                <Navbar idiomaSelecionado={id} />
            </div>

            <ConjugContext.Provider value={
                {
                    conjugacoes,
                    setConjugacoes,
                    conjugacoesId,
                    setConjugacoesId
                }
            }>
                <Outlet />
            </ConjugContext.Provider>
        </>
    );
}