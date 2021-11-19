import { AgeGroup } from '../../../age-group';
import { Club } from '../../club';
import { Gender } from '../../../gender';
import { Round } from '../../round';
import { Competition } from '../competition';

export interface Championship extends Competition {
    ageGroup: AgeGroup;
    clubs: Club[];
    gender: Gender;
    roundIterations: number;
    rounds: Round[];
}
