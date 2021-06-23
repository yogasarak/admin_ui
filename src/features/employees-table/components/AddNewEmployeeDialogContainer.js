import { connect } from 'react-redux'
import { Action } from 'features/employees-table/actions'
import AddNewEmployeeDialog from 'features/employees-table/components/AddNewEmployeeDialog'

const mapDispatchToProps = dispatch => { return {
    createEmployee: (employee) => {
      dispatch(Action.createEmployee(employee))
    },
    cancelCreateEmployeeDialog: () => {
      dispatch(Action.cancelCreateEmployeeDialog())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(AddNewEmployeeDialog)
