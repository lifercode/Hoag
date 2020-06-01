import React, { createContext, useReducer } from 'react'
import {
  taskReducer,
  inboxReducer,
  todayReducer,
  upcomingReducer,
  modalReducer,
  projectReducer,
  tagReducer
} from './reducers'

import {
  InitialStateType,
  AppContextType
} from './types'

const initialState = {
  tasks: [],
  inbox: [],
  today: [],
  upcoming: [],
  modalOpen: {
    createTask: false,
    createProject: false,
    createTag: false,
  },
  projects: [],
  tags: [],
}

const reducer = (state: InitialStateType, action: any) => {
  const {
    tasks,
    inbox,
    today,
    upcoming,
    modalOpen,
    projects,
    tags
  } = state

  return {
    tasks: taskReducer(tasks, action),
    inbox: inboxReducer(inbox, action),
    today: todayReducer(today, action),
    upcoming: upcomingReducer(upcoming, action),
    modalOpen: modalReducer(modalOpen, action),
    projects: projectReducer(projects, action),
    tags: tagReducer(tags, action)
  }
}

const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null
})

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }