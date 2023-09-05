import '../resources/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function EXFL() {

    let navigate = useNavigate(); 
    const home = () => { 
        navigate('/');
    }

    return(
        <Container className="App2">
            <Row>
                <p>(under construction)</p>
            </Row>
            <Button style={greyButton()} onClick={home}>
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

export default EXFL;