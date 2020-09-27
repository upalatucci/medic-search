import React, { useState, useEffect } from 'react';
import Table from './Table';
import Filter from './Filters';
import Papa from 'papaparse';
import dataCsv from './data.csv'

function Home() {
  let [diamonds, setDiamonds] = useState([]);
  let [start, setStart] = useState(false);
  
  useEffect(() => {
    Papa.parse(dataCsv, {
      header: true,
      download: true,
      complete: function (results) {
        setDiamonds(results.data);
        setStart(true);
      }
      });
  }, [])

  return (
    <div className="content">
      <h1 stlye="color:#0b5394">Cerca il tuo Diamante</h1>
      {start ?
        <Filter diamonds={diamonds} setDiamonds={setDiamonds} /> : <div></div>
      }
      <Table data={diamonds} />
    </div>
  )
}


export default Home;