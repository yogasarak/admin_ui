import React from 'react'
import { connect } from 'react-redux'
import { Action } from 'features/employees-table/actions'
import NavBar from 'components/NavBar'

const mapDispatchToProps = dispatch => {
  return {
    addNewHandler: () => {
      dispatch(Action.showAddNewEmployee())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(props => {
  const buttons = [
    {
      text: 'Add new',
      handler: props.addNewHandler
    }
  ]
  return <NavBar buttons={buttons} />
})
