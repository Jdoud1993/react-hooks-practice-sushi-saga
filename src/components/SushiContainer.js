import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushi, onEatSushi, bank}) {

  const [sushiCount, setSushiCount] = useState(0)

  const sushiDisplay = sushi.map((sushi) => <Sushi key={sushi.id} sushi={sushi} onEatSushi={onEatSushi} bank={bank} />)

  const sushiList = sushiDisplay.slice(sushiCount, sushiCount+4)

  function handleGetSushi() {
    setSushiCount((number) => number+4)
  }

  return (
    <div className="belt">
      {sushiList}
      <MoreButton onGetSushi={handleGetSushi}/>
    </div>
  );
}

export default SushiContainer;
