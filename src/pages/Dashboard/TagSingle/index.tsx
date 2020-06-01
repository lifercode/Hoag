import React, { useContext } from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'

import { AppContext } from '../../../store'

const TagSingle = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <PageHeader title ="Tag" />
      <TaskList tasks={state.tasks} type="task" />
    </>
  )
}

export default TagSingle
