import React, {useState} from "react";

function Sushi({sushi, onEatSushi, bank}) {

  const [isEaten, setIsEaten] = useState(false)

  function handleSushiClick() {
    if(bank-sushi.price >=0) {
      setIsEaten(true)
      onEatSushi(sushi.price, sushi.name)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
