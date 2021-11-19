import { ActionEnum } from '../action';
import { LocationResourceEnum } from './location-resource.enum';

export class LocationPermissionsService {
    static readonly createLocationEntity =
        ActionEnum.CREATE.toString() + LocationResourceEnum.LOCATION_ENTITY.toString();
    static readonly deleteLocationEntity =
        ActionEnum.DELETE.toString() + LocationResourceEnum.LOCATION_ENTITY.toString();
    static readonly updateLocationEntity =
        ActionEnum.UPDATE.toString() + LocationResourceEnum.LOCATION_ENTITY.toString();
    static readonly viewLocationEntity = ActionEnum.VIEW.toString() + LocationResourceEnum.LOCATION_ENTITY.toString();
}
