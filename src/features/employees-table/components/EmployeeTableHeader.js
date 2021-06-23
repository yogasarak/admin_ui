import React from 'react'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const EmployeeTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>First Name</TableCell>
        <TableCell>Middle Initial</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Date of Birth</TableCell>
        <TableCell>Date of Employment</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}

export default EmployeeTableHeader
