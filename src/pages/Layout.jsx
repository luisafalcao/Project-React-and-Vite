import { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BarraLogin from "../components/login/BarraLogin"
import CriarConta from "../components/login/CriarConta"
import logo from '../assets/idiomas.svg'

export default function Layout() {
    const [usuario, setUsuario] = useState({ id: "", email: "", senha: "" });
    return (
        <>
            <nav className="top-nav">
                <BarraLogin usuario={usuario} setUsuario={setUsuario} />

                {usuario.id ?
                    <Link to={"/"}><FontAwesomeIcon className="home-icon" icon="fa-solid fa-house" /></Link>
                    :
                    <img src={logo} className="logo" alt="Logo" />
                }
            </nav>

            <main>
                {usuario.id ?
                    <Outlet context={[usuario, setUsuario]} /> :
                    <CriarConta usuario={usuario} setUsuario={setUsuario} />
                }
            </main>
        </>
    )
}