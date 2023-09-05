import '../resources/App.css';
import Container from 'react-bootstrap/Container';
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
    const managerRecordsByYear = () => {
        navigate('managerRecordsByYear')
    }

    return(
        <Container className="App2">
            <Button style={whiteButton()} onClick={managers}>
                Managers
            </Button>
            <Button style={whiteButton()} onClick={managerRecords}>
                Manager Records
            </Button>
            <Button style={whiteButton()} onClick={managerRecordsByYear}>
                Individual Manager Records By Year
            </Button>
            <Button style={greyButton()} onClick={home}>
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

export default NJFL;