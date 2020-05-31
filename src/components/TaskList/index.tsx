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
  tasks: TaskType[],
  type: string
}

const TaskList: React.FC<TaskListProps> = ({ tasks, type }) => (
  <List>
    {tasks.map((item, index) => (
      <TaskItem key={index} task={item} />
    ))}
    <AddTaskItem type={type} />
  </List>
)

export default TaskList
