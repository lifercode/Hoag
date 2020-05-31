import {
  TagType,
  ActionType,
  Types
} from '../types'

const tagReducer = (state: TagType[], action: ActionType) => {
  switch (action.type) {
    case Types.CREATE_TAG:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name
        }
      ]
    case Types.DELETE_TAG:
      return [
        ...state.filter(product => product.id !== action.payload.id),
      ]
    default:
      return state;
  }
}

export default tagReducer
