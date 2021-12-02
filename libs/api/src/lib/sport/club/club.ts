import { Address } from '../../address';
import { Identifiable } from '../../base';
import { Location } from '../../location';
import { Dates, States } from '../../state';
import { Association } from '../association';
import { Category } from '../category';
import { Player } from '../player';

export interface Club extends Identifiable {
    address: Address | null;
    association: Association;
    category: Category;
    contacts?: unknown[] | null;
    dates: Dates;
    isNational: boolean;
    locations: Location[];
    logo: string;
    name: string;
    officialWebSite: string | null;
    players?: Player[];
    shortName?: string;
    simpleName?: string;
    states: States;
}
