import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css"

export default function Map({positionIss}) {
    console.log(positionIss);

    const position = [positionIss.latitude, positionIss.longitude]

    return (
        <MapContainer center={position} zoom={4}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    ISS
                </Popup>
            </Marker>
        </MapContainer>
    )
}
