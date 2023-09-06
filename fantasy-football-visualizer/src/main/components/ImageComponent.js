// ImageComponent.js
import React from 'react';
import njflManagerRecordByYear_brendan from '../images/njflManagerRecordByYear_brendan.png';
import njflManagerRecordByYear_jordan from '../images/njflManagerRecordByYear_jordan.png';
import njflManagerRecordByYear_thomas from '../images/njflManagerRecordByYear_thomas.png';
import njflLeagueManagers from '../images/njflLeagueManagers.png';
import njflActiveLeagueManagers from '../images/njflActiveLeagueManagers.png';
import '../resources/App.css';

function ImageComponent({ selectedOption }) {
  let imageUrl;

  switch (selectedOption) {
    case 'brendan':
      imageUrl = njflManagerRecordByYear_brendan;
      break;
    case 'jordan':
      imageUrl = njflManagerRecordByYear_jordan;
      break;
    case 'thomas':
        imageUrl = njflManagerRecordByYear_thomas;
        break;
    case false:
        imageUrl = njflLeagueManagers;
        break;
    case true:
        imageUrl = njflActiveLeagueManagers;
        break;
    default:
      imageUrl = 'null';
  }

  return (
    <div>
      {imageUrl != 'null' && (<img src={imageUrl} className='image' alt={imageUrl} />)}
    </div>
  );
}

export default ImageComponent;
