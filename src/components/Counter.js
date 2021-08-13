import React, { useState } from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyncAlt} from '@fortawesome/free-solid-svg-icons';
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrementClick = () => setCounter(counter + 1); 
    const handleDecrementClick = () => setCounter(counter - 1);
    const handleResetClick = () => setCounter(0);
  return (
    <div className="counter">
      <FontAwesomeIcon
          icon={faSyncAlt}
          className="reset-icon"
          onClick={handleResetClick}
      />
      <h1>{counter}</h1>
      <button type="button" onClick={handleDecrementClick} className="minus">Decrement</button>
      <button type="button" onClick={handleIncrementClick} className="plus">Increment</button>
    </div>
  );
}

export default Counter;
