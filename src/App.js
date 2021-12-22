import React, {useEffect} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

// Components
import Map from './Components/Map/Map'
import Header from './Components/Header'

function App(props) {

  useEffect(() => {

    fetch(`http://api.open-notify.org/iss-now.json`)
      .then(response => response.json())
      .then(result => result.message === "success" && props.issPosition(result.iss_position))

  }, [])

  return (
    <Container>
      <Header/>
      {props.position.success === true && <Map/>}
      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

function mapDispatchToProps(dispatch) {
  return {
    issPosition: (pos) => dispatch({type: "dataIss", pos}),
  }
}

function mapStateToProps(state) {
  return { 
      position: state.iss
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
