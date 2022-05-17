import React, { useState } from 'react'; //optional

function CounterButton(props){
  const [clickAmount, setClickAmount] = useState(0);

  const handleClick = () => setClickAmount(clickAmount => clickAmount + 1);

  return (
    <button onClick={handleClick} className="CounterButton">
    You clicked me {clickAmount} times
    </button>
  );
}

export default CounterButton;