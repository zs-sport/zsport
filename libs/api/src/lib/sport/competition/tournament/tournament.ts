import { AgeGroup } from '../../../age-group';
import { Club } from '../../club';
import { Gender } from '../../../gender';
import { Competition } from '../competition';
import { GroupLevel } from '../../group';
import { Country } from '../../../country';

export interface Tournament extends Competition {
    ageGroup: AgeGroup;
    clubs: Club[];
    country: Country;
    gender: Gender;
    groupLevels: GroupLevel[];
    isNational: boolean;
}
