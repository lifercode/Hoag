import { ActionType, Types } from '../types'
import { ProjectType } from './types'

const projectReducer = (state: ProjectType[], action: ActionType) => {
  switch (action.type) {
    case Types.CREATE_PROJECT:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name
        }
      ]
    case Types.DELETE_PROJECT:
      return [
        ...state.filter(product => product.id !== action.payload.id),
      ]
    default:
      return state;
  }
}

export default projectReducer
