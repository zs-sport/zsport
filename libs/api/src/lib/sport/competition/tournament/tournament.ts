import { AgeGroup } from '../../../age-group';
import { Club } from '../../club';
import { Gender } from '../../../gender';
import { Competition } from '../competition';
import { GroupLevel } from '../../group';

export interface Tournament extends Competition {
    ageGroup: AgeGroup;
    clubs: Club[];
    gender: Gender;
    groupLevels: GroupLevel[];
}
