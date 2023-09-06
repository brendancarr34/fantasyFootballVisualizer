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
        navigate('managerRecordsByYear');
    }
    const topThreeFinishes = () => {
        navigate('topThreeFinishes');
    }

    return(
        <Container className="App2">
            <Button className='button-white' onClick={managers}>
                Managers
            </Button>
            <Button className='button-white' onClick={managerRecords}>
                Manager Records
            </Button>
            <Button className='button-white' onClick={managerRecordsByYear}>
                Individual Manager Records By Year
            </Button>
            <Button className='button-white' onClick={topThreeFinishes}>
                Top Three Finishes
            </Button>
            <Button className='button-grey' onClick={home}>
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