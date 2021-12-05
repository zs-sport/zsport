import { EntityUtilService } from '../base';
import { Country } from './country';

export abstract class CountryUtilService extends EntityUtilService {
    public abstract getCountries(): Country[];
}
