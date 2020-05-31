import React, { useState } from 'react'
import {
  ListItem,
  ListItemIcon,
  Checkbox,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Menu,
  MenuItem
} from '@material-ui/core'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

type TaskType = {
  id: string,
  content: string,
  completed: boolean
}

type TaskItemProps = {
  task: TaskType
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isChecked, setChecked] = useState(task.completed)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleChecked = () => setChecked(!isChecked)

  return (
    <>
      <ListItem role={undefined} dense button onClick={toggleChecked}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={isChecked}
            disableRipple
            onClick={toggleChecked}
          />
        </ListItemIcon>
        <ListItemText primary="Tarefa um" />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreHorizIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
          <MenuItem onClick={() => {}}>
            Edit task
          </MenuItem>
          <MenuItem onClick={() => {}}>
            Delete task
          </MenuItem>
      </Menu>
    </>
  )
}

export default TaskItem
