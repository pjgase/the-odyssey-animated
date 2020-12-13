import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Col, Row, Button} from 'react-bootstrap'
import './App.css';
import Navbar from './Navbar.js'
import Trip from './Trip.js'
import Map from './Map.js'
import journeyData from './journey-data.json' // This file contains all of the story data in JSON format

function App() {
  
  const [locationIndex, setLocationIndex] = useState(0)
  const [directionIndex, setDirectionIndex] = useState('forward')

  // Function to Advance the Journey
  function handleContinue() {
    if (locationIndex < (journeyData.length-1)) {
      setLocationIndex((prevLocationIndex) => prevLocationIndex + 1)
    }
    if (locationIndex === (journeyData.length-1)) {
      setLocationIndex(0)
    }
    setDirectionIndex('forward')
  }

  // Function to Reverse the Journey
  function handleReverse() {
    if (locationIndex > 0 && locationIndex < journeyData.length) {
      setLocationIndex((prevLocationIndex) => prevLocationIndex - 1)
    }
    setDirectionIndex('reverse')
  }
  
  // Render App
  return (
    <Container fluid className = 'App-container'>
      <header className="App-header">
        <Row className ='Title-container'>
          <Col xl={9} lg={7} md={7} sm={6} className='d-flex justify-content-center justify-content-sm-start'>
            <Navbar className='title'/>
          </Col>
          <Col xl={3} lg={5} md={5} sm={6} className='Button-container justify-content-center justify-content-sm-end'>
          {(locationIndex > 0 && locationIndex < journeyData.length) ?
            <Button variant='secondary' size='lg' onClick={handleReverse}>
              Go Back
            </Button>
            :
            <Button variant='secondary' size='lg' onClick={handleReverse} disabled>
              Go Back
            </Button>
            }
            <Button variant='primary' size='lg' onClick={handleContinue}>
              {locationIndex === (journeyData.length-1) ? "Restart the Voyage" : "Set Sail"}
            </Button>
          </Col>
        </Row>
      </header>
      <main className='Info-container'>
        <Row>
          <Col xl="8">
            <div className='Map-container'>
              <Map locationIndex={locationIndex} directionIndex={directionIndex} journeyData={journeyData}/>
            </div>
          </Col>
          <Col xl="4">
            <div className='Trip-container'>
              {/* <img className='Scroll' src='https://cdn.pixabay.com/photo/2013/07/12/12/49/papyrus-146302_1280.png' alt=''></img> */}
              <Trip locationIndex={locationIndex} directionIndex={directionIndex} journeyData={journeyData}/>
            </div>
          </Col>
        </Row>
      </main>
      {/* <div className='Build-details'>
        <p>Built with React, GSAP, and Bootstrap <i>(pgase, Fall 2020)</i></p>
        <p>Base Map Modified from: Nzeemin, CC BY-SA 3.0 https://creativecommons.org/licenses/by-sa/3.0</p>
      </div> */}
    </Container>
  );
}

export default App;
