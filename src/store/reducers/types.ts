import { InboxActions } from './inbox/types'
import { TaskActions } from './task/types'
import { TodayActions } from './today/types'
import { UpcomingActions } from './upcoming/types'
import { ModalActions } from './modal/types'
import { ProjectActions } from './project/types'
import { TagActions } from './tag/types'

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  CREATE_TASK = 'CREATE_TASK',
  DELETE_TASK = 'DELETE_TASK',
  CREATE_INBOX_TASK = 'CREATE_INBOX_TASK',
  DELETE_INBOX_TASK = 'DELETE_INBOX_TASK',
  CREATE_TODAY_TASK = 'CREATE_TODAY_TASK',
  DELETE_TODAY_TASK = 'DELETE_TODAY_TASK',
  CREATE_UPCOMING_TASK = 'CREATE_UPCOMING_TASK',
  DELETE_UPCOMING_TASK = 'DELETE_UPCOMING_TASK',
  TOGGLE_MODAL_CREATE_TASK = 'TOGGLE_MODAL_CREATE_TASK',
  TOGGLE_MODAL_CREATE_PROJECT = 'TOGGLE_MODAL_CREATE_PROJECT',
  TOGGLE_MODAL_CREATE_TAG = 'TOGGLE_MODAL_CREATE_TAG',
  CREATE_PROJECT = 'CREATE_PROJECT',
  DELETE_PROJECT = 'DELETE_PROJECT',
  CREATE_TAG = 'CREATE_TAG',
  DELETE_TAG = 'DELETE_TAG',
}

export type TaskType = {
  id: string;
  content: string;
  completed: boolean;
}

export type ActionType = InboxActions
  | TodayActions
  | UpcomingActions
  | ModalActions
  | ProjectActions
  | TagActions
  | TaskActions
