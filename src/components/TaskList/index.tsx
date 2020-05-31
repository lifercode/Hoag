import React from 'react'
import { List } from '@material-ui/core'

import TaskItem from './TaskItem'
import AddTaskItem from './AddTaskItem'

type TaskType = {
  id: string,
  content: string,
  completed: boolean
}

type TaskListProps = {
  tasks: TaskType[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
  <List>
    {tasks.map((item, index) => (
      <TaskItem key={index} task={item} />
    ))}
    <AddTaskItem />
  </List>
)

export default TaskList
