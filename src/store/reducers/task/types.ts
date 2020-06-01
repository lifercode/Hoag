import {
  ActionMap,
  Types
} from '../types'

export type TaskPayload = {
  [Types.CREATE_TASK] : {
    id: string;
    content: string;
  };
  [Types.DELETE_TASK] : {
    id: string;
  };
}

export type TaskActions = ActionMap<TaskPayload>[keyof ActionMap<TaskPayload>];
