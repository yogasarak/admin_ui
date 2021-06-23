import client from 'api/MockApiClient'

export const ActionType = {
  fetchEmployeesFinished: 'FETCH_EMPLOYEES_FINISHED',
  showEditEmployee: 'SHOW_EDIT_EMPLOYEE',
  cancelEditEmployeeDialog: 'CANCEL_EDIT_EMPLOYEE_DIALOG',
  updatedEmployee: 'UPDATED_EMPLOYEE',
  showAddNewEmployee: 'SHOW_ADD_NEW_EMPLOYEE',
  cancelCreateEmployeeDialog: 'CANCEL_CREATE_EMPLOYEE_DIALOG',
  newEmployeeCreated: 'NEW_EMPLOYEE_CREATED',
  showDeleteEmployee: 'SHOW_DELETE_EMPLOYEE',
  employeeDeleted: 'EMPLOYEE_DELETED',
  cancelDeleteEmployeeDialog: 'CANCEL_DELETE_EMPLOYEE_DIALOG'
}

export const Action = {
  get fetchEmployees() {
    return () => async dispatch => {
      const data = await client.fetchEmployees()
      dispatch({
        type: ActionType.fetchEmployeesFinished,
        payload: data
      })
    }
  },
  showEditEmployee: employeeId => {
    return {
      type: ActionType.showEditEmployee,
      payload: { id: employeeId }
    }
  },
  cancelEditEmployeeDialog: () => {
    return {
      type: ActionType.cancelEditEmployeeDialog
    }
  },
  get updateEmployee() {
    return employee => async dispatch => {
      const updatedEmployee = await client.updateEmployee(employee)
      dispatch({
        type: ActionType.updatedEmployee,
        payload: updatedEmployee
      })
      dispatch(this.fetchEmployees())
    }
  },
  showAddNewEmployee: () => {
    return {
      type: ActionType.showAddNewEmployee
    }
  },
  cancelCreateEmployeeDialog: () => {
    return {
      type: ActionType.cancelCreateEmployeeDialog
    }
  },
  get createEmployee() {
    return newEmployee => async dispatch => {
      const data = await client.createEmployee(newEmployee)
      dispatch({
        type: ActionType.newEmployeeCreated,
        payload: data
      })
      dispatch(this.fetchEmployees())
    }
  },
  showDeleteEmployee: employeeId => {
    return {
      type: ActionType.showDeleteEmployee,
      payload: { id: employeeId }
    }
  },
  get deleteEmployee() {
    return employeeId => async dispatch => {
      const data = await client.deleteEmployee(employeeId)
      dispatch({
        type: ActionType.employeeDeleted,
        payload: { id: data }
      })
      dispatch(this.fetchEmployees())
    }
  },
  cancelDeleteEmployeeDialog: () => {
    return {
      type: ActionType.cancelDeleteEmployeeDialog
    }
  }
}
