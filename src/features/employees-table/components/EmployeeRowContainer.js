import { connect } from 'react-redux'
import EmployeeRow from 'features/employees-table/components/EmployeeRow'
import { Action } from 'features/employees-table/actions'

const mapDispatchToProps = dispatch => {
  return {
    showEditEmployee: employeeId => {
      dispatch(Action.showEditEmployee(employeeId))
    },
    showDeleteEmployee: employeeId => {
      dispatch(Action.showDeleteEmployee(employeeId))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EmployeeRow)
