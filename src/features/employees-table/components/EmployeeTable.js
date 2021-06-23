/* eslint-disable */ 
import React, { useEffect } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import Container from '@material-ui/core/Container'

import EmployeeRowContainer from './EmployeeRowContainer'
import EmployeeTableHeader from './EmployeeTableHeader'
import AddNewEmployeeDialogContainer from './AddNewEmployeeDialogContainer'
import EditEmployeeDialogContainer from './EditEmployeeDialogContainer'
import DeleteEmployeeDialogContainer from './DeleteEmployeeDialogContainer'

export default props => {
  const {
    employees = [],
    isShowingAddNewEmployee,
    isShowingEditEmployee,
    employeeIdBeingEditted,
    isShowingDeleteEmployee,
    employeeIdBeingDeleted,
    fetchEmployees
  } = props

  let employeeToBeEditted
  if (isShowingEditEmployee) {
    employeeToBeEditted = employees.find(employee => {
      return employeeIdBeingEditted === employee.id
    })
  }

  let employeeToBeDeleted
  if (isShowingDeleteEmployee) {
    employeeToBeDeleted = employees.find(employee => {
      return employeeIdBeingDeleted === employee.id
    })
  }

  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

  return (
    <Container>
      {isShowingAddNewEmployee && <AddNewEmployeeDialogContainer />}
      {isShowingEditEmployee && (
        <EditEmployeeDialogContainer employee={employeeToBeEditted} />
      )}
      {isShowingDeleteEmployee && (
        <DeleteEmployeeDialogContainer employee={employeeToBeDeleted} />
      )}
      <Table>
        <EmployeeTableHeader />
        <TableBody>
          {employees.map(employee => {
            return (
              <EmployeeRowContainer
                employee={employee}
                key={'employee-row' + employee.id}
              />
            )
          })}
        </TableBody>
      </Table>
    </Container>
  )
}
