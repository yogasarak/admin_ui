import React from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'
import AppRouter from 'AppRouter'

const App = props => {
  const { authToken } = props
  return (
    <Container>
      <AppRouter authToken={authToken} />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    authToken: state.auth.authToken
  }
}

export default connect(mapStateToProps)(App)
