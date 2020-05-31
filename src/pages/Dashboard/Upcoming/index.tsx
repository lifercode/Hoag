import React from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'
import { tasks } from '../../../fakeData'

const Upcoming = () => (
  <>
    <PageHeader title ="Upcoming" />
    <TaskList tasks={tasks} />
  </>
)

export default Upcoming
