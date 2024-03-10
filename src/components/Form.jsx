/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { inserirIdioma, inserirItem } from "../infra/basededados";
import "./Form.css"

export default function Form({ campos, textoBotao, idiomaSelecionado, categoria, textoSucesso, setDatabaseId, subCategoria }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    async function enviarDados(dados) {
        let id
        if (categoria === "idiomas") {
            const idiomaNome = dados.idioma.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            id = await inserirIdioma(dados, idiomaNome);
        } else {
            let subColecaoNome
            let tempo
            let conjGrupo

            if (categoria === "vocabulario") {
                subColecaoNome = dados.palavraId.toLowerCase();
            } else if (categoria === "gramatica") {
                subColecaoNome = dados.regra.toLowerCase();
            } else if (categoria === "verbos") {
                subColecaoNome = dados.infinitivoId.toLowerCase() //faire
            } else if (categoria === "conjugacoes") {
                subColecaoNome = dados.tempoVerbal.toLowerCase() //faire
            }

            id = await inserirItem(dados, idiomaSelecionado, categoria, subColecaoNome, tempo, conjGrupo)
        }

        setDatabaseId(id)
        alert(textoSucesso)
        reset();
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit(enviarDados)}>
                {
                    campos.map((campo, index) => {
                        const { name, type, maxLength, required, label, options, noLabel } = campo

                        if (type === "textarea") {
                            return (
                                <div key={index} className="form-group">
                                    <label htmlFor={name}>{label}</label>
                                    <textarea cols="30" rows="10" {...register(name, { required: required, maxLength: maxLength })}></textarea>
                                </div>
                            )
                        } else if (type === "select") {
                            return (
                                <div key={index} className="form-group">
                                    <label htmlFor={name}>{label}</label>
                                    <select {...register(name, { required: required, maxLength: maxLength })}>
                                        {options.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                            )
                        } else if (noLabel) {
                            return (
                                <div key={index} className="form-group flex">
                                    <input placeholder={label} className={`${required && 'required'}`} type={type} {...register(name, { required: required, maxLength: maxLength })} />
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className="form-group">
                                    <label htmlFor={name}>{label}{required && name != "idioma" && <span>*</span>}</label>
                                    <input className={`${required && 'required'}`} type={type} {...register(name, { required: required, maxLength: maxLength })} />
                                </div>
                            )
                        }



                    })
                }
                <input type="submit" value={textoBotao} />
            </form>
        </div>
    )
}