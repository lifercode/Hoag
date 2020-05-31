import React, { useContext } from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'

import { AppContext } from '../../../store'

const Upcoming = () => {
  const { state } = useContext(AppContext)
  
  return (
    <>
      <PageHeader title ="Upcoming" />
      <TaskList tasks={state.upcoming} type="upcoming" />
    </>
  )
}

export default Upcoming
