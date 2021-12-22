import L from 'leaflet';

const iconISS = new L.Icon({
    iconUrl: require('../../Images/iss2.png'),
    iconRetinaUrl: require('../../Images/iss2.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(50, 40),
    className: 'leaflet-div-icon',
});

export { iconISS };