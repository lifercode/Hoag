import {
  ActionMap,
  Types
} from '../types'

export type UpcomingPayload = {
  [Types.CREATE_UPCOMING_TASK] : {
    id: string;
    content: string;
  };
  [Types.DELETE_UPCOMING_TASK] : {
    id: string;
  };
}

export type UpcomingActions = ActionMap<UpcomingPayload>[keyof ActionMap<UpcomingPayload>];
