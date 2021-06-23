import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

const EmployeeRow = props => {
  const { employee, showEditEmployee, showDeleteEmployee } = props

  function editHandler() {
    showEditEmployee(employee.id)
  }

  function deleteHandler() {
    showDeleteEmployee(employee.id)
  }

  return (
    <TableRow key={'employee-row-' + employee.id}>
      <TableCell>{employee.id}</TableCell>
      <TableCell>{employee.firstName}</TableCell>
      <TableCell>{employee.middleInitial}</TableCell>
      <TableCell>{employee.lastName}</TableCell>
      <TableCell>{employee.dateOfBirth}</TableCell>
      <TableCell>{employee.dateOfEmployment}</TableCell>
      <TableCell>{employee.status}</TableCell>
      <TableCell>
        <IconButton onClick={editHandler} aria-label='edit employee'>
          <EditIcon />
        </IconButton>
        <IconButton onClick={deleteHandler} aria-label='edit employee'>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default EmployeeRow
