import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import njflManagerRecords from '../njflManagerRecords.png';

function ManagerRecordsPage() {

    let navigate = useNavigate(); 
    const back = () => { 
        navigate('/njfl');
    }

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
                <img src={njflManagerRecords} style={{height: '60vh'}}/>
            </Row>
            {/* <Row>
                <br></br>
            </Row> */}
            <Button style={greyButton()} onClick={back}>
                Back
          </Button>
        </Container>
    )

    function whiteButton() {
        return {
            backgroundColor:"white",
            color:"black",
            border:'black',
            // width: 155,
            padding:20,
            margin:10,
            'font-size':20
        }
    }

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