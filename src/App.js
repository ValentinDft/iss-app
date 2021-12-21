import React from 'react'
import styled from 'styled-components'

// Components
import Map from './Components/Map/Map'
import Header from './Components/Map/Header'

export default function App() {
  return (
    <Container>
      <Header/>
      <Map/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
