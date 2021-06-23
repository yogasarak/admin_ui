/* eslint-disable */ 
import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const EMPTY_EMPLOYEE = {
  id: '',
  firstName: '',
  middleInitial: '',
  lastName: '',
  dateOfBirth: '',
  dateOfEmployment: '',
  status: ''
}

export default props => {
  const { employee = EMPTY_EMPLOYEE, saveHandler, cancelHandler } = props
 /* //add for UI error of unedited field (import useState)
 const [isFirstName, setIsFirstName] = useState(true) 
 */

  const submitHandler = e => {
    e.preventDefault()
    saveHandler({
      id: e.target.id.value,
      firstName: e.target.firstName.value,
      middleInitial: e.target.middleInitial.value,
      lastName: e.target.lastName.value,
      dateOfBirth: e.target.dateOfBirth.value,
      dateOfEmployment: e.target.dateOfEmployment.value,
      status: e.target.status.value
    })
  }

  const classes = useStyles()
  return (
    <form className={classes.form} noValidate onSubmit={submitHandler}>
      <TextField
        disabled
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='id'
        label='Id'
        name='id'
        defaultValue={employee.id}
        autoFocus
      />
      <TextField
        /* //uncomment to add UI warning for unedited field
        onChange={() => setIsFirstName(!isFirstName)}
        error={isFirstName ? true : false} */
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='firstName'
        label='First Name'
        name='firstName'
        defaultValue={employee.firstName}
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='middleInitial'
        label='Middle initial'
        name='middleInitial'
        defaultValue={employee.middleInitial}
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='lastName'
        label='Last name'
        name='lastName'
        defaultValue={employee.lastName}
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='dateOfBirth'
        label='Date of birth: Year-Month-Day'
        name='dateOfBirth'
        defaultValue={employee.dateOfBirth}
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='dateOfEmployment'
        label='Date of employment: Year-Month-Day'
        name='dateOfEmployment'
        defaultValue={employee.dateOfEmployment}
        autoFocus
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='status'
        label='Status : Active or Inactive'
        name='status'
        defaultValue={employee.status}
        autoFocus
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        color='primary'
        className={classes.submit}
      >
        Save
      </Button>
      <Button
        onClick={cancelHandler}
        fullWidth
        variant='contained'
        className={classes.submit}
      >
        Cancel
      </Button>
    </form>
  )
}
