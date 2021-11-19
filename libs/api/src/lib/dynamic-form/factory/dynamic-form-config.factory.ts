import { BaseService } from '../../base';
import { FormConfig } from '../config';

export abstract class DynamicFormConfigFactory extends BaseService {
    public abstract createFormConfig(): FormConfig;
}
