// THIS FILE IS NOT USED IN THE ODYSSEY PROJECT

import React, {useState, useEffect} from 'react'

function TripItem(props) {
    
    var description = ''

    if (props.locationIndex === 0){
        description = 'Odysseus, the king of the Greek state Ithaca, was the reason that the Trojan War ended. He was the mastermind behind the Trojan Horse ploy that let the Greek armies into the city of Troy to conquer it. After the war, he sets sail on a journey around the Mediterranean that lasts much longer than he expects.'
    }
    
    if (props.locationIndex === 1){
        description = 'Upon arriving in Africa, Odysseus and his soldiers meet the "Lotus Eaters", a people who consume a drug-like lotus flower. Odysseus and his men fall into a sleepy stupor, forget their families, and never want to leave. They only manage to get off the settlement when Odysseus comes to his senses and drags them back to the ship, ties them down, and makes them row away.'
    }


    // useEffect(() => {
    //     if (props.locationIndex === 1){
    //         // gsap.fromTo('#details', 
    //         description = 'This contains the details for step 1 of the journey'
    //     }
    //     console.log(props.locationIndex, 'UseEffect triggered in tripItem')
    // }, [props.locationIndex])
    
    return (
        <div>
        <p id='details'>{description}</p>
        {/* <button>Go Back in Time</button>
        <button>Continue the Journey</button> */}
        </div>
    )
}

export default TripItem