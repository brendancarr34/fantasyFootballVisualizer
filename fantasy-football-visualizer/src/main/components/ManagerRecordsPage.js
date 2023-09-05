import '../resources/App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import njflManagerRecords from '../images/njflManagerRecords.png';
// import { handleNjflClick } from '../routes/NJFLRouter';

function ManagerRecordsPage() {

    let navigate = useNavigate(); 
    const back = () => { 
        navigate('/njfl');
    }
    // const { goBAck } = handleNjflClick();

    return(
        <Container className="App2">
            <Row>
                <h1>Manager Records</h1>
                <h3>2011-2022</h3>
            </Row>
            {/* <Row>
                <br></br>
            </Row> */}
            <Row>
                <img src={njflManagerRecords} style={{height: '60vh'}} alt="njflManagerRecords"/>
            </Row>
            {/* <Row>
                <br></br>
            </Row> */}
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

export default ManagerRecordsPage;