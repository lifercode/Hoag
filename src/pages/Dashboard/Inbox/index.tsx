import React from 'react'

import { PageHeader } from '../../../components/ui'
import { TaskList } from '../../../components'
import { tasks } from '../../../fakeData'

const Inbox = () => (
  <>
    <PageHeader title ="Inbox" />
    <TaskList tasks={tasks} />
  </>
)

export default Inbox
