import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import njflLeagueManagers from '../njflLeagueManagers.png';

function ManagersPage() {

    let navigate = useNavigate(); 
    const back = () => { 
        navigate('/njfl');
    }

    return(
        <Container className="App2">
            <Row>
                <h1>Managers</h1>
                <h3>2011-2022</h3>
            </Row>
            <Row>
                <br></br>
            </Row>
            <Row>
                <img src={njflLeagueManagers} style={{height: '40vh'}}/>
            </Row>
            <Row>
                <br></br>
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

export default ManagersPage;