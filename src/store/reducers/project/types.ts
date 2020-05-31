import {
  ActionMap,
  Types
} from '../types'

export type ProjectType = {
  id: string;
  name: string;
}

export type ProjectPayload = {
  [Types.CREATE_PROJECT] : {
    id: string;
    name: string;
  };
  [Types.DELETE_PROJECT] : {
    id: string;
  };
}

export type ProjectActions = ActionMap<ProjectPayload>[keyof ActionMap<ProjectPayload>];
