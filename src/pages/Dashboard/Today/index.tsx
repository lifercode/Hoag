import React from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'
import { tasks } from '../../../fakeData'

const Today = () => (
  <>
    <PageHeader title ="Today" />
    <TaskList tasks={tasks} />
  </>
)

export default Today
