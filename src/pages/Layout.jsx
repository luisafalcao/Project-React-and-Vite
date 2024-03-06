import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BarraLogin from "../components/login/BarraLogin"
import CriarConta from "../components/login/CriarConta"

export default function Layout() {
    const [usuario, setUsuario] = useState({ id: "", email: "", senha: "" });
    return (
        <>
            <nav className="top-nav">
                <BarraLogin usuario={usuario} setUsuario={setUsuario} />
                <Link to={"/"}><FontAwesomeIcon className="home-icon" icon="fa-solid fa-house" /></Link>
            </nav>
            {usuario.id ?
                <Outlet context={[usuario, setUsuario]} /> :

                <CriarConta usuario={usuario} setUsuario={setUsuario} />
            }
        </>
    )
}