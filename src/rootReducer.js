import { combineReducers } from 'redux'
import { employeesTableReducer } from 'features/employees-table'
import { signInReducer } from 'features/sign-in'

export default combineReducers({
  employees: employeesTableReducer,
  auth: signInReducer
})
