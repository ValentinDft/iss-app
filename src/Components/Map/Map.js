import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {  iconISS  } from './Icon';
import "./Map.css"

import {connect} from 'react-redux';

function Map(props) {

    const position = [props.position.latitude, props.position.longitude]

    return (
        <MapContainer center={position} zoom={4}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={ iconISS }></Marker>
        </MapContainer>
    )
}

function mapStateToProps(state) {
    return { 
        position: state.iss
    }
}

export default connect(mapStateToProps, null)(Map);
