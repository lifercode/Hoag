import {
  TaskType,
  ActionType,
  Types
} from '../types'

const taskReducer = (state: TaskType[], action: ActionType) => {
  switch (action.type) {
    case Types.CREATE_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content,
          completed: false
        }
      ]
    case Types.DELETE_TASK:
      return [
        ...state.filter(product => product.id !== action.payload.id),
      ]
    default:
      return state;
  }
}

export default taskReducer
