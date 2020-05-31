import {
  ActionMap,
  Types
} from '../types'

export type InboxPayload = {
  [Types.CREATE_INBOX_TASK] : {
    id: string;
    content: string;
  };
  [Types.DELETE_INBOX_TASK] : {
    id: string;
  };
}

export type InboxActions = ActionMap<InboxPayload>[keyof ActionMap<InboxPayload>];
