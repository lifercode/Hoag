import React from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

const AddTaskItem = () => (
  <ListItem button>
    <ListItemIcon>
      <AddIcon />
    </ListItemIcon>
    <ListItemText primary="Add task" />
  </ListItem>
)

export default AddTaskItem
