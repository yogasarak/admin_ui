import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { SignInContainer } from 'features/sign-in'
import { EmployeeTableContainer } from 'features/employees-table'

const Routes = ({ authToken }) => {
  return (
    <Router>
      <ProtectedRoute
        exact
        path='/'
        component={EmployeeTableContainer}
        authToken={authToken}
      />
      <SignInRoute 
        path='/sign-in' 
        authToken={authToken} 
      />
      <ProtectedRoute
        path='/employees'
        component={EmployeeTableContainer}
        authToken={authToken}
      />
    </Router>
  )
}
export default Routes

const SignInRoute = props => {
  const { authToken, ...rest } = props
  return (
    <Route
      {...rest}
      render={props =>
        authToken ? (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        ) : (
          <SignInContainer {...props} />
        )
      }
    />
  )
}


const ProtectedRoute = props => {
  const { authToken, component: Component, ...rest } = props
  return (
    <Route
    {...rest}
    render={props =>
      authToken ? (
        <Component {...props} />
        ) : (
          <Redirect
          to={{
            pathname: '/sign-in',
            state: { from: props.location }
          }}
          />
        )
      }
    />
  )
}
