import { Action } from "@ngrx/store";

export const LIST_CARDS = 'LIST_CARDS';

export class ListCardsActions implements Action {
    readonly type = LIST_CARDS;
}

export type Actions = ListCardsActions;