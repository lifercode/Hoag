import React, { useState, useContext } from 'react'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Button
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { AppContext } from '../../store'
import { Types } from '../../store/reducers/types'

type AddTaskItemProps = {
  type: string
}

const AddTaskItem: React.FC<AddTaskItemProps> = ({ type }) => {
  const [isFieldOpen, setFieldOpen] = useState(false)
  const [content, setContent] = useState('')
  const { state, dispatch } = useContext(AppContext)

  const createTask = () => {
    if (!content.length) {
      return
    }

    const payload = {
      id: (state.tasks.length + 1).toString(),
      content,
    }

    if (type === 'inbox') {
      dispatch({
        type: Types.CREATE_INBOX_TASK,
        payload
      })
    }

    if (type === 'today') {
      dispatch({
        type: Types.CREATE_TODAY_TASK,
        payload
      })
    }

    if (type === 'upcoming') {
      dispatch({
        type: Types.CREATE_UPCOMING_TASK,
        payload
      })
    }
    
    setContent('')
    setFieldOpen(false)
  }

  const handleChange = (e: any) => {
    setContent(e.target.value)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault()
      createTask()
    }

    if (e.key === "Escape") {
      e.preventDefault()
      setContent('')
      setFieldOpen(false)
    }
  }

  return (
    <>
      {!isFieldOpen ? (
        <ListItem button onClick={() => setFieldOpen(true)}>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add task" />
        </ListItem>
      ) : (
        <ListItem>
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <TextField
              id="standard-basic"
              placeholder="Type your task here"
              variant="outlined"
              autoFocus
              value={content}
              onChange={handleChange}
              style={{ marginTop: 10 }}
              onKeyDown={handleKeyDown}
            />
            <div style={{ marginTop: 8 }}>
              <Button variant="contained" color="default" onClick={createTask}>Add Task</Button>
              <Button onClick={() => setFieldOpen(false)}>Cancel</Button>
            </div>
          </div>
        </ListItem>
      )}
    </>
  )
}

export default AddTaskItem
