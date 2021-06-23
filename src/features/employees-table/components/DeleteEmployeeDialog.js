/* eslint-disable */ 
import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default props => {
  const { employee, deleteEmployee, cancelDeleteEmployeeDialog } = props

  const deleteHandler = () => {
    deleteEmployee(employee.id)
  }

  return (
    <Dialog
      open={true}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>Are sure you?</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          ({employee.id}) {employee.firstName} {employee.lastName} will be
          permanently deleted. Are you sure?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={deleteHandler} color='primary'>
          Delete
        </Button>
        <Button
          onClick={cancelDeleteEmployeeDialog}
          color='secondary'
          autoFocus
        >
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  )
}
