import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

// Requete
import { useQuery } from 'react-query'
import { getPosition } from './app/api';

// Components
import Map from './Components/Map/Map'
import Header from './Components/Header'


function App(props) {

  const {isLoading, isSuccess, data, isError, error} = useQuery('iss', () => getPosition(), { staleTime: 60_000 })

  return (
    <Container>
      <Header/>
      {isLoading && <h3>Chargement...</h3>}
      {isSuccess && <Map data={data.iss_position}/>}
      {isError && <h3>Erreur... {error.message}</h3>}
      
    </Container>
  )
}

// Style
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

// Redux
const mapDispatchToProps = dispatch => {
  return {
    issPosition: pos => dispatch({type: "GET_POSITION_ISS", pos}),
  }
}

const mapStateToProps = state => {
  return { 
      position: state.iss
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
