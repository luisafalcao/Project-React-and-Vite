/* eslint-disable react/prop-types */
import { useState } from "react"
import "./CriarConta.css"
import { criarConta } from "../../infra/usuarios"

export default function CriarConta({ usuario, setUsuario }) {
    const [dadosForm, setDadosForm] = useState({ email: "", senha: "", confirma: "" });

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setDadosForm((objetoAtual) => {
            return { ...objetoAtual, [fieldName]: fieldValue }
        })
    }

    const handleClick = () => {
        if (dadosForm.senha === dadosForm.confirma) {
            setUsuario((objetoAtual) => {
                const retorno = {
                    ...objetoAtual,
                    ["email"]: dadosForm.email,
                    ["senha"]: dadosForm.senha,
                };
                return retorno
            });
            criarConta(usuario, setUsuario);
        } else {
            alert("Senhas não conferem");
        }
    };

    return (
        <main className="criar-conta">
            <h2 className="center">Criar Conta</h2>
            <div className="container flex">
                <form>
                    <div>
                        <label htmlFor="email">Email:</label> <br />
                        <input type="text" name="email" value={dadosForm.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label> <br />
                        <input type="password" name="senha" value={dadosForm.senha} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirma">Confirmar Senha:</label> <br />
                        <input type="password" name="confirma" value={dadosForm.confirma} onChange={handleChange} />
                    </div>
                    <input type="button" value="Criar Conta" onClick={handleClick} />
                </form>
            </div>
        </main>

    )
}