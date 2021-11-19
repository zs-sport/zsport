import { Action } from '../action';
import { Resource } from '../resource';

export interface Permission {
    action: Action;
    resource: Resource;
}
