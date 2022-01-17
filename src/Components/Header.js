import React, {useRef} from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";

export default function Header() {
    return (
        <ContainerHeader>
            <h1>Position de l'ISS</h1>
        </ContainerHeader>
    )
}

// Style
const ContainerHeader = styled.div`
    background-color: #071052;
    width: 100vw;
    margin-bottom: 1%;
    @import url('https://fonts.googleapis.com/css2?family=Istok+Web&display=swap');
    & h1 {
        font-family: 'Istok Web', sans-serif;
        color: white;
        text-align: center;
    }
    
`;
