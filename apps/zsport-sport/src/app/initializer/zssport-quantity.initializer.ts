import { EntityQuantityStateService } from '@zsport/api';

export function ZssportQuantityInitializer(entityQuantityStateService: EntityQuantityStateService) {
    return () => {
        return new Promise<any>((resolve, reject) => {
            entityQuantityStateService.dispatchListEntitiesAction();

            resolve(true);
        });
    };
}
