import { connect } from 'react-redux'
import { Action } from 'features/employees-table/actions'
import EditEmployeeDialog from 'features/employees-table/components/EditEmployeeDialog'

const mapDispatchToProps = dispatch => { return {
    updateEmployee: (employee) => {
      dispatch(Action.updateEmployee(employee))
    },
    cancelEditEmployeeDialog: () => {
      dispatch(Action.cancelEditEmployeeDialog())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(EditEmployeeDialog)
