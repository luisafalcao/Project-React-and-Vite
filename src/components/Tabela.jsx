import DataTable from "react-data-table-component";
import "./Tabela.css";

export default function Tabela({ conteudo }) {
    const customStyles = {
        table: {
            style: {
                backgroundColor: "transparent"
            }
        },
        rows: {
            style: {
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "#002ec9",
                backgroundColor: "transparent",
            }
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
            },
        },
        headRow: {
            style: {
                backgroundColor: "transparent",
            }
        }

    };

    const colunas = [
        {
            name: "Português",
            selector: row => row.palavraPt,
            sortable: true,
        },
        {
            name: "Traducao",
            selector: row => row.palavraId,
            sortable: true,
        },
    ]

    function handleRowSelect(selectedRows) {
        console.log(selectedRows[0]?.id)
    }

    return (
        <div>
            <DataTable
                columns={colunas}
                data={conteudo}
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