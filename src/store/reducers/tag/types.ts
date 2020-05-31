import {
  ActionMap,
  Types
} from '../types'

export type TagType = {
  id: string;
  name: string;
}

export type TagPayload = {
  [Types.CREATE_TAG] : {
    id: string;
    name: string;
  };
  [Types.DELETE_TAG] : {
    id: string;
  };
}

export type TagActions = ActionMap<TagPayload>[keyof ActionMap<TagPayload>];
