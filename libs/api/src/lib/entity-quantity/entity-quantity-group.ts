import { EntityQuantityEnum } from './entity-quantity.enum';

export interface EntityQuantityGroup {
    id: string;
    quantity: number;
    type: EntityQuantityEnum;
}
