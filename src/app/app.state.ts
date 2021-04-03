import { card } from './models/card.model';
import { selectWithIcon } from './models/selectWithIcon.model';

export default interface AppState {
    selectWithIcons: selectWithIcon[];
    cards: card[];
}