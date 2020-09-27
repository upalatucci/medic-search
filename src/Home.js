import React, { useState, useEffect } from 'react';
import Table from './Table';
import Filter from './Filters';
import Papa from 'papaparse';
import dataCsv from './data.csv'

function Home() {
  let [entries, setEntries] = useState([]);
  let [start, setStart] = useState(false);
  
  useEffect(() => {
    Papa.parse(dataCsv, {
      header: true,
      download: true,
      complete: function (results) {
        setEntries(results.data);
        setStart(true);
      }
      });
  }, [])

  return (
    <div className="content">
      <h1 stlye="color:#0b5394">Ricerca Neoplasie</h1>
      {start ?
        <Filter data={entries} setData={setEntries} /> : <div></div>
      }
      <Table data={entries} />
    </div>
  )
}


export default Home;