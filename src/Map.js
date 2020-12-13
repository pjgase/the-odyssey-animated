import React, {useEffect, useState} from 'react'
import {ReactComponent as MapSVG} from './The Odyssey.svg'
import {gsap} from 'gsap'
import {MotionPathPlugin} from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)

function Map(props) {

    // MAP ANIMATIONS SECTION
    let allLocations = props.journeyData.map(item => item.locationTag)
    let allRoutes = props.journeyData.map(item => item.routeTag)
    
    useEffect(() => {

        // Clear Map When Starting and Restarting Voyage
        if (props.locationIndex === 0 && props.directionIndex === 'forward'){
            gsap.killTweensOf(allLocations)
            gsap.killTweensOf(allRoutes)
            gsap.set(allLocations, {opacity: 0})
            gsap.set(allRoutes, {opacity: 0})

        }
        // Animate to Destination
        gsap.set('#OdBoat', {xPercent:-50, yPercent:-50})
        
        // Forward Direction
        if (props.directionIndex === 'forward'){
            let forwardLocation = props.journeyData[props.locationIndex].locationTag
            let forwardRoute = props.journeyData[props.locationIndex].routeTag
            gsap.to(forwardLocation, {opacity: 1, duration: 10})
            gsap.to(forwardRoute, {opacity: 0.75, duration: 10})
            gsap.to('#OdBoat', {
                duration: 10,
                transformOrigin: '50% 50%',  
                motionPath: {
                    path: forwardRoute,
                    align: forwardRoute,
                    start: 0,
                    end: 1
                }
            })
        }
        // Reverse Direction
        if (props.directionIndex === 'reverse'){
            let reverseLocation = props.journeyData[props.locationIndex+1].locationTag
            let reverseRoute = props.journeyData[props.locationIndex+1].routeTag
            gsap.to(reverseLocation, {opacity: 0, duration: 10})
            gsap.to(reverseRoute, {opacity: 0, duration: 10})
            gsap.to('#OdBoat', {
                duration: 10,
                transformOrigin: '50% 50%',  
                motionPath: {
                    path: reverseRoute,
                    align: reverseRoute,
                    start: 1,
                    end: 0
                }
            })
        }
    })

    // MAP SIZING SECTION (for responsiveness)
    const [svgZoom, setSvgZoom] = useState(
        (window.innerWidth < 768) ? "200 90 650 300" : 
        (window.innerWidth < 992) ? "100 40 800 400" : "50 20 900 450"
        // (window.innerWidth < 1200) ? "50 20 900 450" : "0 0 1053 518"
        )

    function handleResize() {
        setSvgZoom(
            (window.innerWidth < 768) ? "200 90 650 300" : 
            (window.innerWidth < 992) ? "100 40 800 400" : "50 20 900 450"
            // (window.innerWidth < 1200) ? "50 20 900 450" : "0 0 1053 518"
            )
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return (
            () => window.removeEventListener('resize', handleResize)
        )
    })

    return(
        <div>
            <MapSVG viewBox={svgZoom}/>
        </div>
    )
}

export default Map