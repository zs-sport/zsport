import { Identifiable } from '../../base';
import { Dates, States } from '../../state';
import { Category } from '../category';

export interface Source extends Identifiable {
    category: Category;
    dates: Dates;
    image: string;
    name: string;
    states: States;
    url: string;
}
