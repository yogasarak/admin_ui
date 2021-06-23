/* eslint-disable */ 
import { ActionType } from 'features/sign-in/actions'

const INVALID_AUTH_TOKEN = null
const INITIAL_STATE = {
  authToken: INVALID_AUTH_TOKEN,
  isSigningIn: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.signIn:
      return { ...state, isSigningIn: true }
    case ActionType.signInSuccessful:
      return { ...state, authToken: action.payload, isSigningIn: false }
    default:
      return state
  }
}
