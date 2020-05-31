import {
  ActionMap,
  Types
} from '../types'

export type ModalPayload = {
  [Types.TOGGLE_MODAL_CREATE_PROJECT] : {};
  [Types.TOGGLE_MODAL_CREATE_TAG] : {};
  [Types.TOGGLE_MODAL_CREATE_TASK] : {};
}

export type ModalActions = ActionMap<ModalPayload>[keyof ActionMap<ModalPayload>];
