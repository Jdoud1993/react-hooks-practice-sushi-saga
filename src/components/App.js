import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushi, setSushi] = useState([])
  const [tablePlates, setTablePlates] = useState([])
  const [bank, setBank] = useState(100)

  function handleEatSushi (price, name) {
    setBank((bank) => bank-price)
    setTablePlates([...tablePlates, name])
  }

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((sushiData) => setSushi(sushiData))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushi={sushi} onEatSushi={handleEatSushi} bank={bank}/>
      <Table bank={bank} plates={tablePlates}/>
    </div>
  );
}

export default App;
