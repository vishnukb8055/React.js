import React, { useState } from 'react';
function SearchBar() {
  const [text, setText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setDisplayText(text);
  };
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
      />
      <button onClick={handleClick}>Display</button>
      <div>
        {displayText}
      </div>
    </div>
  );
}
export default SearchBar;
