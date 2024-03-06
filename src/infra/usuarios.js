import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../infra/firebase'

export function logarUsuario(usuario, setUsuario) {
    signInWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then((credenciais) => {
            setUsuario((objetoAtual) => {
                const retorno = {
                    ...objetoAtual,
                    ["id"]: credenciais.user.uid,
                };
                return retorno;
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode} = ${errorMessage}`);
            alert("Login Inválido")
        })
}

export function deslogarUsuario(usuario, setUsuario) {
    signOut(auth).then(() => {
        setUsuario({ id: "", email: "", senha: "" })
    })
}

export function criarConta(usuario, setUsuario) {
    createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
        .then((credenciais) => {
            setUsuario((objetoAtual) => {
                const retorno = {
                    ...objetoAtual,
                    ["id"]: credenciais.user.uid,
                };
                return retorno;
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            alert("Erro na criação da conta")
        })
}