import { Club } from '../club';

export interface Group {
    title: number;
    eventIds: string[];
    clubs: Club[];
    winnerNumber: number;
}
