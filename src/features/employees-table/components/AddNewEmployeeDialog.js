/* eslint-disable */ 
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import EditEmployeeForm from 'features/employees-table/components/EditEmployeeForm'

export default (props) => {
  const { createEmployee, cancelCreateEmployeeDialog } = props
  return (
    <Dialog
      open={true}
      fullWidth={true}
      variant='fullWidth'
      maxWidth='lg'
      aria-labelledby='form-dialog-title'
    >
      <DialogTitle id='form-dialog-title'>Add New Employee</DialogTitle>
      <DialogContent>
        <EditEmployeeForm
          saveHandler={createEmployee}
          cancelHandler={cancelCreateEmployeeDialog}
        />
      </DialogContent>
    </Dialog>
  )
}
