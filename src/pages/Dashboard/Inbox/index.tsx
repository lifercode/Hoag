import React, { useContext } from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'

import { AppContext } from '../../../store'

const Inbox = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <PageHeader title ="Inbox" />
      <TaskList tasks={state.tasks} type="inbox" />
    </>
  )
}

export default Inbox
