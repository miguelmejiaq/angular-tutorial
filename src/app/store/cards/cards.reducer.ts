import { card } from "src/app/models/card.model";
import * as cardActions from './cards.actions';
const initialState: card[] = [];

export function CardsReducer (state : card[] = initialState , action : cardActions.Actions){
    switch(action.type){
        case cardActions.LIST_CARDS:
            return [
                {icon: 'dog', title: 'title', subtitle: 'subtitle', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
            ];
        default:
            return state;
    }
}