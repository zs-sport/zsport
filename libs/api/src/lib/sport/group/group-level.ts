import { Group } from './group';

export interface GroupLevel {
    eventIds: string[] | null;
    groups: Group[] | null;
    groupsNumber: number;
    isWithResults: boolean;
    level: number;
    title: string;
    winnersNumber: number;
}
