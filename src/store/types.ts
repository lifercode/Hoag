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

type ProjectType = {
  id: string;
  name: string;
}

type TagType = {
  id: string;
  name: string;
}

export type InitialStateType = {
  tasks: TaskType[]
  today: TaskType[]
  upcoming: TaskType[]
  modalOpen: ModalOpenType
  projects: ProjectType[]
  tags: TagType[]
}

export type AppContextType = {
  state: InitialStateType
  dispatch: React.Dispatch<any>
}
