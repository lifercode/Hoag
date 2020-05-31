import React, { useState, useContext } from 'react'
import {
  TextField,
  Button
} from '@material-ui/core'

import { AppContext } from '../../store'
import { Types } from '../../store/reducers/types'

type CreateProjectProps = {
  onFinish: () => void
}

const CreateProject: React.FC<CreateProjectProps> = ({ onFinish }) => {
  const [name, setName] = useState('')
  const { state, dispatch } = useContext(AppContext)

  const createProject = () => {
    if (!name.length) {
      return
    }

    const payload = {
      id: (state.projects.length + 1).toString(),
      name,
    }

    dispatch({
      type: Types.CREATE_PROJECT,
      payload
    })
    
    setName('')
    onFinish()
  }

  const handleChange = (e: any) => {
    setName(e.target.value)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault()
      createProject()
    }

    if (e.key === "Escape") {
      e.preventDefault()
      setName('')
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
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        style={{ marginTop: 10 }}
      />
      <div style={{ marginTop: 8 }}>
        <Button variant="contained" color="default" onClick={createProject}>Add Project</Button>
        <Button onClick={onFinish}>Cancel</Button>
      </div>
    </div>
  )
}

export default CreateProject
