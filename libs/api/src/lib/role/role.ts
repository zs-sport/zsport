import { Identifiable } from '../base';

export interface Role extends Identifiable {
    name?: string;
    permissions?: string[];
}
