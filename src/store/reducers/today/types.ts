import {
  ActionMap,
  Types
} from '../types'

export type TodayPayload = {
  [Types.CREATE_TODAY_TASK] : {
    id: string;
    content: string;
  };
  [Types.DELETE_TODAY_TASK] : {
    id: string;
  };
}

export type TodayActions = ActionMap<TodayPayload>[keyof ActionMap<TodayPayload>];
