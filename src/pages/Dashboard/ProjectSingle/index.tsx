import React, { useContext } from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'

import { AppContext } from '../../../store'

const ProjectSingle = () => {
  const { state } = useContext(AppContext)

  return (
    <>
      <PageHeader title ="Project" />
      <TaskList tasks={state.tasks} type="task" />
    </>
  )
}

export default ProjectSingle
