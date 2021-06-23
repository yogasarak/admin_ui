/* eslint-disable */ 
import { ActionType } from 'features/employees-table/actions'

const INITIAL_STATE = {
  employees: [],
  isFetchingEmployees: false,
  isShowingAddNewEmployee: false,
  isShowingEditEmployee: false,
  employeeIdBeingEditted: 0,
  isShowingDeleteEmployee: false,
  employeeIdBeingDeleted: 0
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.fetchEmployeesFinished:
      return { ...state, employees: action.payload, isFetchingEmployees: false }
    case ActionType.showAddNewEmployee:
      return { ...state, isShowingAddNewEmployee: true }
    case ActionType.cancelCreateEmployeeDialog:
    case ActionType.newEmployeeCreated:
      return { ...state, isShowingAddNewEmployee: false }
    case ActionType.showEditEmployee:
      return {
        ...state,
        isShowingEditEmployee: true,
        employeeIdBeingEditted: action.payload.id
      }
    case ActionType.cancelEditEmployeeDialog:
    case ActionType.updatedEmployee:
      return { ...state, isShowingEditEmployee: false }
    case ActionType.showDeleteEmployee:
      return {
        ...state,
        isShowingDeleteEmployee: true,
        employeeIdBeingDeleted: action.payload.id
      }
    case ActionType.cancelDeleteEmployeeDialog:
    case ActionType.employeeDeleted:
      return { ...state, isShowingDeleteEmployee: false }
    default:
      return state
  }
}
