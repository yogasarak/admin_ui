import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
}))

const NavBar = ({buttons = []}) => {
  const classes = useStyles()
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h5' color='inherit' className={classes.title}>
          Admin Management
        </Typography>

        {buttons.map((button) => {
          return (
          <Button 
            key={button.text} 
            color='inherit' 
            onClick={button.handler}
          >
            {button.text}
          </Button>)
        })}
{/*
        <Button 
          color='inherit' 
          onClick={addNewHandler}
        >Add new
        </Button> */}
        
      </Toolbar>
    </AppBar>
  )
}

export default NavBar

// button map It’s actually an unnecessary abstraction. example for reuse of the navbar in other places. mapped over that so other features could add their own buttons to the nav bar. So it would be configurable, but not currently beign used. 