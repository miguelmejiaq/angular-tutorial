import { selectWithIcon } from '../../models/selectWithIcon.model';
import * as selectActions from './selectWithIcon.actions';

const initialState: selectWithIcon[]= [];

export function selectWithIconReducer( state: selectWithIcon[] = initialState, action: selectActions.SelectWithIconActions){
    switch(action.type){
        case selectActions.LIST_OPTIONS :
            return [
                {icon: 'card', name: 'Card'},
                {icon: 'dog', name: 'Dog'},
                {icon: 'monkey', name: 'Monkey'},
                {icon: 'pencil', name: 'Pencil'},
                {icon: 'pc', name: 'Pc'}
            ];
        default:
            return state; 
    }
}