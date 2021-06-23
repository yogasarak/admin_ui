/* eslint-disable */ 
import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

import EditEmployeeForm from 'features/employees-table/components/EditEmployeeForm'

export default (props) => {
  const { employee, updateEmployee, cancelEditEmployeeDialog } = props
  return (
    <div>
      <Dialog
        open={true}
        variant='fullWidth'
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Edit Employee</DialogTitle>
        <DialogContent>
          <EditEmployeeForm
            employee={employee}
            saveHandler={updateEmployee}
            cancelHandler={cancelEditEmployeeDialog}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
