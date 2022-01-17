import React, {useRef, useEffect} from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import {  iconISS  } from './Icon';
import "./Map.css"
import { gsap } from "gsap";

import {connect} from 'react-redux';

function Map({data}) {

    const position = [data.latitude, data.longitude]
    const refMap = useRef();
    
    const animationSlide = elem => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: -500,
                // zoom: 0,
            },
            {
                opacity: 1,
                x: 0,
                // zoom: 1,
                duration: 0.8,
            }
        )
    }

    useEffect(() => {
	        animationSlide(refMap.current)
    }, [])

    return (
        <div ref={refMap}>
            <MapContainer center={position} zoom={4}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={ iconISS }></Marker>
            </MapContainer>
        </div>
    )
}

// Redux
function mapStateToProps(state) {
    return { 
        position: state.iss
    }
}

export default connect(mapStateToProps, null)(Map);
