import { EntityQuantityStateService } from '@zsport/api';

export function ZsportAdminQuantityInitializer(entityQuantityStateService: EntityQuantityStateService) {
    return () => {
        return new Promise<any>((resolve, reject) => {
            entityQuantityStateService.dispatchListEntitiesAction();

            resolve(true);
        });
    };
}
