import React, { useEffect, useLayoutEffect } from 'react'
import {gsap} from 'gsap'

function Trip(props) {
    
    let status = props.journeyData[props.locationIndex].status
    let name = props.journeyData[props.locationIndex].name
    let details = props.journeyData[props.locationIndex].details

    // Set Opacity on Mount
    useLayoutEffect(() => {
        gsap.set('#status', {opacity: 0})
        gsap.set('#name', {opacity: 0})
        gsap.set('#details', {opacity: 0})
    })

    // Animate the Story As If It's Being Written
    useEffect(() => {
        gsap.to('#status', {opacity: 1, duration: 1.5})
        gsap.to('#name', {opacity: 1, duration: 1.5, delay: 7})
        gsap.to('#details', {opacity: 1, duration: 1.5, delay: 7})
    })


    return(
        <div>
            <h5 id='status'><i>{status}</i></h5>
            <h3 id='name'>{name}</h3>
            <p id='details'>{details}</p>
        </div>
    )
}

export default Trip