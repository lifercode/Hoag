import {
  TaskType,
  ActionType,
  Types
} from '../types'

const inboxReducer = (state: TaskType[], action: ActionType) => {
  switch (action.type) {
    case Types.CREATE_INBOX_TASK:
      return [
        ...state,
        {
          id: action.payload.id,
          content: action.payload.content,
          completed: false
        }
      ]
    case Types.DELETE_INBOX_TASK:
      return [
        ...state.filter(product => product.id !== action.payload.id),
      ]
    default:
      return state;
  }
}

export default inboxReducer
