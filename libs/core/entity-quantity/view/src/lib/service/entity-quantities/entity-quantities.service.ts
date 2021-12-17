import { tap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { EntityQuantity, EntityQuantityStateService } from '@zsport/api';

@Injectable()
export class EntityQuantitiesService {
    private entityQuantities!: EntityQuantity[];

    constructor(private entityQuantityStateService: EntityQuantityStateService) {
        this.entityQuantityStateService
            .selectEntities$()
            .pipe(
                tap((entities) => {
                    this.entityQuantities = entities as EntityQuantity[];
                })
            )
            .subscribe();
    }

    public getEntitiyQuantityById(entityQuantityId: string): EntityQuantity {
        const index: number = this.entityQuantities.findIndex(
            (entityQuantity) => entityQuantity.uid === entityQuantityId
        );

        if (index >= 0) {
            return this.entityQuantities[index];
        } else {
            throw new Error(`The requested entityQuantity by id: ${entityQuantityId} is not existed`);
        }
    }
}
