import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Header() {

    const titleHeader = useRef();

    const animationTitle = elem => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -100,
                zoom: 0,
            },
            {
                opacity: 1,
                y: 0,
                zoom: 1,
                duration: 1.2,
            }
        )
    }

    useEffect(() => {
        animationTitle(titleHeader.current)
    }, [])

    return (
        <ContainerHeader>
            <h1 ref={titleHeader}>Position de l'ISS</h1>
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
