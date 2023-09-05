// DropdownComponent.js
import React from 'react';
import '../resources/App.css';

function DropdownComponent({ selectedOption, onOptionChange }) {
  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    onOptionChange(selectedValue);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleDropdownChange} className='dropdown'>
        <option value="--">Select One</option>
        <option value="jordan">Jordan Rumble</option>
        <option value="brendan">Brendan Carr</option>
        <option value="thomas">Thomas McGowan</option>
      </select>
    </div>
  );
}

export default DropdownComponent;
