/* eslint-disable react/prop-types */
import { useCollapse } from "react-collapsed";
import "./Box.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tabela from "./Tabela";

export default function Box({ titulo, categoria, conteudo }) {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

    return (
        <div className="box">

            <div className="box-header" {...getToggleProps()}>
                {categoria === "verbos" ?
                    <>
                        <h3 className="idioma">{titulo}</h3>
                        <h3>{titulo}</h3>
                    </>
                    :
                    <h3>{titulo}</h3>
                }
                {isExpanded ?
                    <FontAwesomeIcon className="collapse-icon" icon="fa-solid fa-chevron-up" /> :
                    <FontAwesomeIcon className="collapse-icon" icon="fa-solid fa-chevron-down" />
                }
            </div>

            <div className="box-body" {...getCollapseProps()}>
                {categoria === "verbos" &&
                    <div className="conjugacao">
                        <Tabela></Tabela>
                        <Tabela></Tabela>
                        <Tabela></Tabela>
                        <Tabela></Tabela>
                    </div>
                }

                {categoria === "regra" &&
                    <div className="regra-gramatical">
                        {conteudo}
                    </div>
                }
            </div>

        </div>
    )
}