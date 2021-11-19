import { Identifiable } from '../base';

export interface EntityQuantity extends Identifiable {
    quantity: number;
    groups: any | null;
}
