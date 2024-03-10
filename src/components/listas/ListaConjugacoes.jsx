/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component"

export default function ListaConjugacoes({ conteudo }) {
    const customStyles = {
        table: {
            style: {
                backgroundColor: "transparent",
            }
        },
        rows: {
            style: {
                fontSize: "1rem",
                fontWeight: "400",
                backgroundColor: "transparent",
                padding: "1rem",
                borderBottom: "2px solid #002ec9",
                borderTop: "2px solid #002ec9",
            }
        },
        headCells: {
            style: {
                paddingLeft: '2rem',
                paddingRight: '1rem',
                fontSize: '1rem',
                color: "#ff4d80",
                display: "none"
            },
        },
        headRow: {
            style: {
                backgroundColor: "transparent",
            }
        },
    };

    const colunas = [
        {
            name: "Tempo Verbal",
            selector: row => row.tempoVerbal,
        },
        {
            name: "",
            selector: row => row.pessoaVerbal1,
        },
        {
            name: "",
            selector: row => row.pessoaVerbal2,
        },
        {
            name: "",
            selector: row => row.pessoaVerbal3,
        },
        {
            name: "",
            selector: row => row.pessoaVerbal4,
        },
        {
            name: "",
            selector: row => row.pessoaVerbal5,
        },
        {
            name: "",
            selector: row => row.pessoaVerbal6,
        },
    ]

    function handleRowSelect(selectedRows) {
        console.log(selectedRows[0]?.id)
    }

    return (
        <DataTable
            columns={colunas}
            data={conteudo}
            responsive
            customStyles={customStyles}
            selectableRows
            selectableRowsHighlight
            selectableRowsSingle
            onSelectedRowsChange={handleRowSelect}
        />
    )
    // return (conteudo.map((item, index) => {
    //     const { tempoVerbal, id, verbo, ...rest } = item
    //     console.log(id)
    //     return (

    //         // <Box key={index} titulo={[verbo]} categoria="conjugacoes">
    //         //     <Tabela key={index} conteudo={rest} tempoVerbal={tempoVerbal}></Tabela>
    //         // </Box>
    //     )
    // }))
}