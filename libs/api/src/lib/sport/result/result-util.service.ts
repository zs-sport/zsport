import { EntityUtilService } from '../../base';
import { Period } from '../period';

export abstract class ResultUtilService extends EntityUtilService {
    public abstract resultAsString(periods: Period[]): string;
}
