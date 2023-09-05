import '../resources/App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import njflManagerRecords from '../images/njflManagerRecords.png';
import { useState } from 'react';
import ImageComponent from './ImageComponent';
import DropdownComponent from './DropdownComponent';

function ManagerRecordsByYearPage() {

    let navigate = useNavigate(); 
    const back = () => { 
        navigate('/njfl');
    }

    const [selectedOption, setSelectedOption] = useState('default'); // Initial value

    const handleOptionChange = (selectedValue) => {
      setSelectedOption(selectedValue);
    };

    return(
        <Container className="App2">
            <Row>
                <h1>Individual Manager Records By Year</h1>
                <h3>2011-2022</h3>
            </Row>
            {/* <Row>
                <br></br>
            </Row> */}
            <Row>
                <DropdownComponent
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                />
            </Row>
            <Row style={{padding:20}}>
            <ImageComponent selectedOption={selectedOption} />
            </Row>
            <Button style={greyButton()} onClick={back}>
                Back
          </Button>
        </Container>
    )

    function greyButton() {
        return {
            backgroundColor:"grey",
            color:"white",
            border:'white',
            // width: '40vh',
            padding:20,
            margin:10,
            'font-size':20
        }
    }

}

export default ManagerRecordsByYearPage;