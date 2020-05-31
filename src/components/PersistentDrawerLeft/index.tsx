import React, { useContext } from 'react'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom'
import {
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import SettingsIcon from '@material-ui/icons/Settings'
import NotificationsIcon from '@material-ui/icons/Notifications'
import MoreIcon from '@material-ui/icons/MoreVert'

import { AppContext } from '../../store'
import { Types } from '../../store/reducers/types'

import Sidebar from './Sidebar'
import { useStyles } from './styles'

const PersistentDrawerLeft: React.FC = ({ children }) => {
  const { dispatch } = useContext(AppContext)
  const classes = useStyles()
  const [open, setOpen] = React.useState(true)
  const history = useHistory()

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const createTask = () => {
    dispatch({
      type: Types.TOGGLE_MODAL_CREATE_TASK
    })
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => history.push('/app')}
            edge="start"
            className={classes.menuButton}
          >
            <HomeIcon />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={createTask}
            >
              <AddIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={3} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              onClick={() => {}}
              color="inherit"
            >
              <SettingsIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              onClick={() => {}}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        {children}
      </main>
    </div>
  )
}

export default PersistentDrawerLeft
