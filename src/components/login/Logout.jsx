/* eslint-disable react/prop-types */
import { deslogarUsuario } from "../../infra/usuarios"

export default function Logout({ usuario, setUsuario }) {

    function handleLogout() {
        deslogarUsuario(usuario, setUsuario)
    }

    return (
        <form className="logout">
            <p>{usuario.email}</p>
            <input type="button" value="Logout" onClick={handleLogout} />
        </form>
    )
}