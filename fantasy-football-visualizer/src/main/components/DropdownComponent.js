// DropdownComponent.js
import React from 'react';

function DropdownComponent({ selectedOption, onOptionChange }) {
  const handleDropdownChange = (e) => {
    const selectedValue = e.target.value;
    onOptionChange(selectedValue);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleDropdownChange}>
        <option value="thomas">Thomas McGowan</option>
        <option value="jordan">Jordan Rumble</option>
        <option value="brendan">Brendan Carr</option>
      </select>
    </div>
  );
}

export default DropdownComponent;
