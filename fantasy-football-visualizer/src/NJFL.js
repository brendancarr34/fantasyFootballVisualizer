import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function NJFL() {

    let navigate = useNavigate(); 
    const home = () => { 
        navigate('/');
    }
    const managers = () => {
        navigate('managers');
    }
    const managerRecords = () => {
        navigate('managerRecords');
    }

    return(
        <Container className="App2">
            <Button style={whiteButton()} onClick={managers}>
                Managers
            </Button>
            <Button style={whiteButton()} onClick={managerRecords}>
                Manager Records
            </Button>
            <Button style={whiteButton()} onClick={home}>
                Back
            </Button>
        </Container>
    )

    function whiteButton() {
        return {
            backgroundColor:"white",
            color:"black",
            border:'black',
            width: 155,
            padding:20,
            margin:10,
            'font-size':20
        }
    }
}

export default NJFL;