/* eslint-disable react/prop-types */
import { logarUsuario } from "../../infra/usuarios";

export default function Login({ usuario, setUsuario }) {

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setUsuario((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        });
    };

    const handleLogin = () => {
        logarUsuario(usuario, setUsuario);
    }

    return (
        <form className="login">
            <label htmlFor="usuario">Email:</label>
            <input type="text" name="email" value={usuario.email} onChange={handleChange} />
            <label htmlFor="senha">Senha:</label>
            <input type="password" name="senha" value={usuario.senha} onChange={handleChange} />
            <input type="button" value="Login" onClick={handleLogin} />
        </form>
    )
}