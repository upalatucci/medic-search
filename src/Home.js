import React, { useState, useEffect } from 'react';
import Table from './Table';
import Filter from './Filters';
import Papa from 'papaparse';

function Home() {
  let [diamonds, setDiamonds] = useState([]);
  let [start, setStart] = useState(false);
  
  useEffect(() => {
    Papa.parse("https://drive.google.com/file/d/1i9vv2U1SEy2FB3L4BM7Fwyh53wC1KD_9/view?usp=sharing", {
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