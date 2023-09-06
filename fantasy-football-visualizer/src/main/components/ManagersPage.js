import '../resources/App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
// import njflLeagueManagers from '../images/njflLeagueManagers.png';
import ImageComponent from './ImageComponent';
import CheckboxComponent from './CheckboxComponent';
import { useState } from 'react';

function ManagersPage() {

    let navigate = useNavigate(); 
    const back = () => { 
        navigate('/njfl');
    }

    const [showImage, setShowImage] = useState(false);

    // Function to toggle the image display based on the checkbox value
    const handleCheckboxChange = () => {
      setShowImage((prevShowImage) => !prevShowImage);
    };

    return(
        <Container className="App2">
            <Row>
                <h1>Managers</h1>
                <h3>2011-2022</h3>
            </Row>
            <Row>
                {/* <input type="checkbox" id="myCheckbox" name="myCheckbox" value="checkboxValue"/>
                <label for="myCheckbox">Active Only</label> */}
                <CheckboxComponent
                    showImage={showImage}
                    onCheckboxChange={handleCheckboxChange}
                />
                <br/>
            </Row>
            <Row>
                {/* <img src={njflLeagueManagers} className='image' alt="njflLeagueManagers"/> */}
                <ImageComponent selectedOption={showImage}/>
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