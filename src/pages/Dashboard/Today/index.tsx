import React, { useContext } from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'

import { AppContext } from '../../../store'

const Today = () => {
  const { state } = useContext(AppContext)
  
  return (
    <>
      <PageHeader title ="Today" />
      <TaskList tasks={state.today} type="today" />
    </>
  )
}

export default Today
