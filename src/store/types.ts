import React from 'react'

type TaskType = {
  id: string
  content: string
  completed: boolean
}

type ModalOpenType = {
  createTask: boolean
  createProject: boolean
  createTag: boolean
}

export type InitialStateType = {
  tasks: TaskType[]
  today: TaskType[]
  upcoming: TaskType[]
  modalOpen: ModalOpenType
}

export type AppContextType = {
  state: InitialStateType
  dispatch: React.Dispatch<any>
}
