import React from 'react';

function CheckboxComponent({ showImage, onCheckboxChange }) {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={showImage}
          onChange={onCheckboxChange}
        />
        Active Only
      </label>
    </div>
  );
}

export default CheckboxComponent;