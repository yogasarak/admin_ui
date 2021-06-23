import { connect } from 'react-redux'
import { Action } from 'features/employees-table/actions'
import DeleteEmployeeDialog from 'features/employees-table/components/DeleteEmployeeDialog'

const mapDispatchToProps = dispatch => {
  return {
    deleteEmployee: employeeId => {
      dispatch(Action.deleteEmployee(employeeId))
    },
    cancelDeleteEmployeeDialog: () => {
      dispatch(Action.cancelDeleteEmployeeDialog())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DeleteEmployeeDialog)
