import { Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import "./Layout.css"
import Navbar from "../components/Navbar";

export default function Idioma() {
    const { id } = useParams();

    return (
        <>
            <div className="nav-wrapper">
                <Navbar idiomaSelecionado={id} />
            </div>

            <Outlet />
        </>
    );
}