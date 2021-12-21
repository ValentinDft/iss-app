import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

// Components
import Map from './Components/Map/Map'
import Header from './Components/Map/Header'

export default function App() {

  const [dataISS, setDataISS] = useState({});

  useEffect(() => {

    fetch(`http://api.open-notify.org/iss-now.json`)
      .then(response => response.json())
      .then(result => result.message === "success" && setDataISS(result.iss_position))

  }, [])

  return (
    <Container>
      <Header/>
      {dataISS.latitude !== undefined && <Map positionIss={dataISS}/>}
      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
