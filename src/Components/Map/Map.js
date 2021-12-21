import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css"

export default function Map() {

    const position = [-30.2755, 166.8021]

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
