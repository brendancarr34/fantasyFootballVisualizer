import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import football from '../images/football.png';
import '../resources/App.css';


function App() {

  let navigate = useNavigate(); 
  const njfl = () => { 
      navigate('/njfl');
  }
  const exfl = () => {
      navigate('/exfl');
  }

  return (
    <Container className="App2">
      <Row>
        <img src={football} className="App-logo" alt="logo" />
      </Row>
      {/* <Row>
          <br/>
      </Row> */}
      <Row>
        <h1>Fantasy Football<br/> Data Visualizer</h1>
        {/* <p>v1.0</p> */}
      </Row>
      <Row style={center()}>
        <Col style={center()}>
          <Button style={whiteButton()} onClick={njfl}>
            NJFL
          </Button>
        </Col>
        <Col style={center()}>
          <Button style={whiteButton()} onClick={exfl}>
            EXFL
          </Button>
        </Col>
      </Row>
      <Row style={centerLower()}>
        <p style={centerLower()}>by brendan carr</p>
      </Row>
    </Container>
  );

  function center() {
    return {
        display: 'flex', 
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
}

function centerLower() {
  return {
      position: 'absolute',
      bottom: '0',
      display: 'flex', 
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
  }
}

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

export default App;
