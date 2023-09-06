import '../resources/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import njflTopThreeFinishes from '../images/njflTopThreeFinishes.png';

function TopThreeFinishes() {

    let navigate = useNavigate(); 
    const back = () => { 
        navigate('/njfl');
    }

    return(
        <Container className="App2">
            <Row>
                <h1>Top Three Finishes</h1>
                <h3>2011-2021</h3>
            </Row>
            <Row>
                <br></br>
            </Row>
            <Row>
                <img src={njflTopThreeFinishes} className='image' alt="njflTopThreeFinishes"/>
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

export default TopThreeFinishes;