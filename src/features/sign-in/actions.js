import client from 'api/MockApiClient'

export const ActionType = {
  signIn: 'SIGN_IN',
  signInSuccessful: 'SIGN_IN_SUCCESSFUL'
}

export const Action = {
  signInSuccessful: authToken => {
    return {
      type: ActionType.signInSuccessful,
      payload: authToken
    }
  },
  get signIn() {
    return (user, pass) => async dispatch => {
      const authToken = await client.signIn(user, pass)
      dispatch(this.signInSuccessful(authToken))
    }
  }
}
