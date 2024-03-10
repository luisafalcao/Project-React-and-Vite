import DataTable from "react-data-table-component";
import { criarArraydeObjetos } from "../utils/organizarArraysdeConjugacao";
import "./Tabela.css";

export default function Tabela({ conteudo, tempoVerbal }) {
    const customStyles = {
        table: {
            style: {
                backgroundColor: "transparent",
                width: "fit-content",
                border: "2px solid red"
            }
        },
        rows: {
            style: {
                fontSize: "1rem",
                fontWeight: "400",
                backgroundColor: "transparent",
                padding: "0 2rem",
                border: "2px solid red"
            }
        },
        headCells: {
            style: {
                paddingLeft: '2rem',
                paddingRight: '1rem',
                fontSize: '1rem',
                color: "#ff4d80",
                border: "2px solid red"
            },
        },
        headRow: {
            style: {
                backgroundColor: "transparent",
                border: "2px solid red"
            }
        },

    };

    // criado pra tentar implementar mais tarde pegando as conjugaçoes dinamicamente do banco de dados:
    const dados = criarArraydeObjetos(conteudo)
    dados.pop()
    dados.shift()

    const colunas = [
        {
            name: tempoVerbal,
            selector: row => row.conjugacao,
        },
    ]

    return (
        <div>
            <DataTable
                columns={colunas}
                data={dados}
                responsive
                dense
                customStyles={customStyles}
                selectableRows
                selectableRowsHighlight
                selectableRowsSingle
                onSelectedRowsChange={handleRowSelect}
            />
        </div>
    )
}