import { ActionEnum } from '../action';
import { BaseService } from '../base';
import { ResourceEnum } from '../resource';

export abstract class PermissionsService extends BaseService {
    public static permissions: string[] = [
        ActionEnum.ALL + ResourceEnum.ALL,
        ActionEnum.SOME + ResourceEnum.SOME,
        ActionEnum.SOME + ResourceEnum.OFFICE,
    ];

    public static addPermissions(permissions: string[]): void {
        PermissionsService.permissions.push(...permissions);
    }
}
