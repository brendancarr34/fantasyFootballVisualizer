import React from 'react';

function CheckboxComponent({ showImage, onCheckboxChange }) {

    const inputStyles = {
        width: '18px',       // Set the desired width
        height: '18px',      // Set the desired height
        // fontSize: '16px',    // Set the desired font size
        // padding: '8px',      // Add padding for better appearance
        marginRight: '10px' 
      };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showImage}
          onChange={onCheckboxChange}
          style={inputStyles}
        />
        Active Only
      </label>
    </div>
  );
}

export default CheckboxComponent;