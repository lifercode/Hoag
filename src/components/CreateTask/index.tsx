import React, { useState, useContext } from 'react'
import {
  TextField,
  Button
} from '@material-ui/core'

import { AppContext } from '../../store'
import { Types } from '../../store/reducers/types'

type CreateTaskProps = {
  onFinish: () => void
}

const CreateTask: React.FC<CreateTaskProps> = ({ onFinish }) => {
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

    dispatch({
      type: Types.CREATE_INBOX_TASK,
      payload
    })
    
    setContent('')
    onFinish()
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
      onFinish()
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <TextField
        id="standard-basic"
        placeholder="Type your task here"
        variant="outlined"
        autoFocus
        value={content}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ marginTop: 10 }}
      />
      <div style={{ marginTop: 8 }}>
        <Button variant="contained" color="default" onClick={createTask}>Add Task</Button>
        <Button onClick={onFinish}>Cancel</Button>
      </div>
    </div>
  )
}

export default CreateTask
