import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'

import InboxIcon from '@material-ui/icons/Inbox'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import ViewDayIcon from '@material-ui/icons/ViewDay'

import { AppContext } from '../../store'
import { Types } from '../../store/reducers/types'
import ListItemCollapse from './ListItemCollapse'
import { useStyles } from './styles'

type SidebarProps = {
  open: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const { state, dispatch } = useContext(AppContext)

  const classes = useStyles()
  const history = useHistory()

  const createProject = () => {
    dispatch({
      type: Types.TOGGLE_MODAL_CREATE_PROJECT
    })
  }

  const createTag = () => {
    dispatch({
      type: Types.TOGGLE_MODAL_CREATE_TAG
    })
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>
        <ListItem button onClick={() => history.push('/app')}>
          <ListItemIcon className={classes.listItemIcon}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button onClick={() => history.push('/app/today')}>
          <ListItemIcon className={classes.listItemIcon}>
            <CalendarTodayIcon />
          </ListItemIcon>
          <ListItemText primary="Today" />
        </ListItem>
        <ListItem button onClick={() => history.push('/app/upcoming')}>
          <ListItemIcon className={classes.listItemIcon}>
            <ViewDayIcon />
          </ListItemIcon>
          <ListItemText primary="Upcoming" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItemCollapse
          title="Projects"
          list={state.projects}
          onAdd={createProject}
        />
      </List>
      <Divider />
      <List>
        <ListItemCollapse
          title="Tags"
          list={state.tags}
          onAdd={createTag}
        />
      </List>
    </Drawer>
  )
}

export default Sidebar
