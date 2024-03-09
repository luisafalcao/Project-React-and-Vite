import DataTable from "react-data-table-component";
// import { criarArraydeObjetos } from "../utils/organizarArraysdeConjugacao";
import "./Tabela.css";

export default function Tabela({ conteudo }) {

    console.log(conteudo)
    const customStyles = {
        table: {
            style: {
                backgroundColor: "transparent",
                width: "fit-content",
            }
        },
        rows: {
            style: {
                fontSize: "1rem",
                fontWeight: "400",
                backgroundColor: "transparent",
                padding: "0 1rem"
            }
        },
        headCells: {
            style: {
                paddingLeft: '2rem',
                paddingRight: '1rem',
                fontSize: '1rem',
                color: "#ff4d80"
            },
        },
        headRow: {
            style: {
                backgroundColor: "transparent",
            }
        },

    };

    // criado pra tentar implementar mais tarde pegando as conjugaçoes dinamicamente do banco de dados:
    // const dados = criarArraydeObjetos(conteudo)
    // const tempoVerbal = Object.values(dados.pop())[0]

    function handleRowSelect(selectedRows) {
        // console.log(selectedRows[0]?.id)
    }

    const colunas = [
        {
            name: "Tempo Verbal",
            selector: row => row.conjugacao,
        },
    ]

    return (
        <div>
            <DataTable
                columns={colunas}
                data={conteudo}
                responsive
                dense
                customStyles={customStyles}
                // selectableRows
                selectableRowsHighlight
                selectableRowsSingle
                onSelectedRowsChange={handleRowSelect}
            />
        </div>
    )
}