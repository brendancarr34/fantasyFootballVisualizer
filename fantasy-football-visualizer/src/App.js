import logo from './logo.svg';
import njflLeagueManagers from './njflLeagueManagers.png';
import football from './football.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={football} className="App-logo" alt="logo" />
    //     <h1 style={{margin:100}}>Fantasy Database Visualizer</h1>
    //   </header>
    // </div>
    <Container className="App2">
      <Row>
        <img src={football} className="App-logo" alt="logo" />
      </Row>
      <Row>
          <br/>
      </Row>
      <Row>
        <h1>Fantasy Football<br/> Data Visualizer</h1>
        <p>v1.0</p>
      </Row>
      <Row style={center()}>
        <Col style={center()}>
          <Button style={whiteButton()}>
            NJFL
          </Button>
        </Col>
        <Col style={center()}>
          <Button style={whiteButton()}>
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
        border:'black',
        width: 155,
        padding:20,
        margin:10
    }
}
}

export default App;
