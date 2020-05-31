import { ActionType, Types } from '../types'
import { ModalOpenType } from './types'

const modalReducer = (state: ModalOpenType, action: ActionType) => {
  switch (action.type) {
    case Types.TOGGLE_MODAL_CREATE_PROJECT:
      return {
        ...state,
        createProject: !state.createProject
      }
    case Types.TOGGLE_MODAL_CREATE_TAG:
      return {
        ...state,
        createTag: !state.createTag
      }
    case Types.TOGGLE_MODAL_CREATE_TASK:
      return {
        ...state,
        createTask: !state.createTask
      }
    default:
      return state;
  }
}

export default modalReducer
