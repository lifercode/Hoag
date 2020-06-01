import React from 'react'

import { TaskType } from './reducers/types'
import { ModalOpenType } from './reducers/modal/types'
import { TagType } from './reducers/tag/types'
import { ProjectType } from './reducers/project/types'

export type InitialStateType = {
  tasks: TaskType[]
  inbox: TaskType[]
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
