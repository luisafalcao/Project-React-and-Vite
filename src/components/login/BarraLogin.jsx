/* eslint-disable react/prop-types */
import Login from "./Login"
import Logout from "./Logout"
import "./BarraLogin.css"

export default function BarraLogin({ usuario, setUsuario }) {
    return (
        <div className="barra-login">
            {usuario.id ?
                <Logout usuario={usuario} setUsuario={setUsuario} />
                :
                <>
                    <Login usuario={usuario} setUsuario={setUsuario} />
                </>
            }
        </div>
    )
}