import { Action } from '@ngrx/store';

export const LIST_OPTIONS = 'LIST_OPTIONS';

export class SelectWithIconActions implements Action {
    readonly type = LIST_OPTIONS;
}

export type Actions = SelectWithIconActions;