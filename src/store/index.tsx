import React, { createContext, useReducer } from 'react'
import {
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
    today,
    upcoming,
    modalOpen,
    projects,
    tags
  } = state

  return {
    tasks: inboxReducer(tasks, action),
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