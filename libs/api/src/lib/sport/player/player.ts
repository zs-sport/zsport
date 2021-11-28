import { Identifiable } from '../../base';
import { Person } from '../../person';
import { Dates, States } from '../../state';
import { Position } from './position';
import { Status } from './status';

export interface Player extends Identifiable {
    clubId: string | null;
    contractTime?: number;
    dates: Dates;
    endDate: number | null;
    fromDate: number;
    number: number;
    person: Person;
    position?: Position;
    price: number | null;
    priceCurrency?: number;
    states: States;
    status: Status;
}
