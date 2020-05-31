import React from 'react'
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

import ListItemCollapse from './ListItemCollapse'
import { useStyles } from './styles'

type SidebarProps = {
  open: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const classes = useStyles()
  const history = useHistory()

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
        <ListItemCollapse title="Projects" list={['Starred']} />
      </List>
      <Divider />
      <List>
        <ListItemCollapse title="Tags" list={['Starred']} />
      </List>
    </Drawer>
  )
}

export default Sidebar
