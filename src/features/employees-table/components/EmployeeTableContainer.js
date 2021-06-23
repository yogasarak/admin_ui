import React from 'react'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container'

import EmployeeTable from 'features/employees-table/components/EmployeeTable'
import { Action } from 'features/employees-table/actions'
import NavBarContainer from 'features/employees-table/components/NavBarContainer'

const mapStateToProps = state => {
  return {
    employees: state.employees.employees,
    isShowingAddNewEmployee: state.employees.isShowingAddNewEmployee,
    isShowingEditEmployee: state.employees.isShowingEditEmployee,
    employeeIdBeingEditted: state.employees.employeeIdBeingEditted,
    isShowingDeleteEmployee: state.employees.isShowingDeleteEmployee,
    employeeIdBeingDeleted: state.employees.employeeIdBeingDeleted
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployees: () => {
      dispatch(Action.fetchEmployees())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(props => {
  return (
    <Container>
      <NavBarContainer />
      <EmployeeTable {...props} />
    </Container>
  )
})
