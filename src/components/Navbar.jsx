import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar({ idiomaSelecionado }) {
    return (
        <nav className="page-nav">
            <ul>
                <li><Link to={`/idioma/${idiomaSelecionado}/gramatica`}>Gramática</Link></li>
                <li><Link to={`/idioma/${idiomaSelecionado}/vocabulario`} pagina="vocabulario">Vocabulário</Link></li>
                <li><Link to={`/idioma/${idiomaSelecionado}/verbos`} pagina="verbos">Verbos</Link></li>
            </ul>
        </nav>
    )
}