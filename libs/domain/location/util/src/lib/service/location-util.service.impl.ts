import { Injectable } from '@angular/core';
import { I18nService, LocationEntity, LocationModel, LocationUtilService, StateUtilService } from '@zsport/api';

@Injectable()
export class LocationUtilServiceImpl extends LocationUtilService {
    public constructor(private i18nService: I18nService, private stateUtilService: StateUtilService) {
        super();
    }

    public convertModelToEntity(locationModel: LocationModel): LocationEntity {
        return { ...locationModel };
    }

    public convertEntityToModel(location: LocationEntity): LocationModel {
        if (!location.uid) {
            location = this.stateUtilService.addDefaultState(location) as LocationEntity;
            location = this.stateUtilService.addDefaultDates(location) as LocationEntity;
        } else {
            location = this.stateUtilService.updateDates(location) as LocationEntity;
        }

        const updatedLocationModel: LocationModel = {
            address: location.address,
            descriptionI18n: location.descriptionI18n,
            photo: location.photo || null,
            name: location.name,
            dates: location.dates,
            seats: location.seats,
            states: location.states,
            uid: location.uid,
            type: location.type || null,
        };

        return updatedLocationModel;
    }

    public getSimpleEntity(locationModel: LocationModel): LocationModel {
        throw new Error();
    }
}
