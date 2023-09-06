import React from 'react';

function CheckboxComponent({ showImage, onCheckboxChange }) {
  return (
    <div>
      <label style={{padding:'100px'}}>
        <input
          type="checkbox"
          checked={showImage}
          onChange={onCheckboxChange}
          style={{marginRight:'10px'}}
        />
        Active Only
      </label>
    </div>
  );
}

export default CheckboxComponent;