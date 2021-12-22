import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <ContainerHeader>
            <Titre>Position de l'ISS</Titre>
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`
    background-color: #071052;
    width: 100vw;
    margin-bottom: 1%;
`;

const Titre = styled.h1`
    color: white;
    text-align: center;
`;
