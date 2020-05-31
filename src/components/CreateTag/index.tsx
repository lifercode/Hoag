import React, { useState, useContext } from 'react'
import {
  TextField,
  Button
} from '@material-ui/core'

import { AppContext } from '../../store'
import { Types } from '../../store/reducers/types'

type CreateTagProps = {
  onFinish: () => void
}

const CreateTag: React.FC<CreateTagProps> = ({ onFinish }) => {
  const [name, setName] = useState('')
  const { state, dispatch } = useContext(AppContext)

  const createTag = () => {
    if (!name.length) {
      return
    }

    const payload = {
      id: (state.tags.length + 1).toString(),
      name,
    }

    dispatch({
      type: Types.CREATE_TAG,
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
      createTag()
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
        <Button variant="contained" color="default" onClick={createTag}>Add Tag</Button>
        <Button onClick={onFinish}>Cancel</Button>
      </div>
    </div>
  )
}

export default CreateTag
