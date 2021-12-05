import { EntityUtilService } from '../base';
import { SelectOptionModel } from '../dynamic-form';
import { Country } from './country';

export abstract class CountryUtilService extends EntityUtilService {
    public abstract getCountries(): Country[];
    public abstract getCountryOptions(): SelectOptionModel[];
}
