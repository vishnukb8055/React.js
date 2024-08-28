import React, { useState } from 'react';
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn(!isOn);
  };
  return (
    <div>
      <button onClick={handleClick}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}
export default Toggle;
