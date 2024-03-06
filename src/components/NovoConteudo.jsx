import { useCollapse } from "react-collapsed";
import "./NovoConteudo.css"

export default function NovoConteudo({ children, label }) {
    const { getCollapseProps, getToggleProps } = useCollapse()

    return (
        <div className="add-conteudo">
            <div className="header" {...getToggleProps()}>Adicionar {label}</div>
            <div className="body" {...getCollapseProps()}>
                {children}
            </div>
        </div>
    )
}