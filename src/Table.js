import React from 'react';
import ReactTable from "react-table";
import Pagination from "./Pagination";

import "react-table/react-table.css";
import "./Table.css";

function createHeader(title){
  return <span><strong>{title}</strong></span>
}

const Table = props => (

  <ReactTable
    PaginationComponent={Pagination}
    data={props.data}
    columns={[
      {
        Header: createHeader("Nome e Cognome"),
        accessor: "nome",
        minWidth: 200
      },
      {
        Header: createHeader("Età"),
        accessor: "eta",
        minWidth: 50
      },
      {
        Header: createHeader("Sesso"),
        accessor: "sesso",
        minWidth: 40
      },
      {
        Header: createHeader("Residenza"),
        accessor: "residenza",
        minWidth: 80
      },
      {
        Header: createHeader("Localizzazione"),
        accessor: "localizzazione",
        minWidth: 100
      },
      {
        Header: createHeader("T"),
        accessor: "T",
        minWidth: 50
      },
      {
        Header: createHeader("N"),
        accessor: "N",
        minWidth: 50
      },
      {
        Header: createHeader("M"),
        accessor: "M",
        minWidth: 50
      }
    ]}
  />
);
export default Table;