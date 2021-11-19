import { Identifiable } from '../../base';
import { Dates, States } from '../../state';
import { Association } from '../association';
import { Category } from '../category';
import { Player } from '../player';

export interface Club extends Identifiable {
    address?: string;
    association?: Association;
    category: Category;
    contacts?: unknown[];
    dates: Dates;
    locations?: Location[];
    logo: string;
    name: string;
    officialWebSite?: string;
    players?: Player[];
    shortName?: string;
    simpleName?: string;
    states: States;
}
