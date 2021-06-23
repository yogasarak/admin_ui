import { connect } from 'react-redux'
import { Action } from 'features/sign-in/actions'
import SignIn from 'features/sign-in/components/SignIn'

const mapDispatchToProps = dispatch => {
  return {
    signIn: (user, pass) => {
      dispatch(Action.signIn(user, pass))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(SignIn)
