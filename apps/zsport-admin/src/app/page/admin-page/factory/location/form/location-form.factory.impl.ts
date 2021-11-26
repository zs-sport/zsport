import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LocationEntity, LocationStateService } from '@zsport/api';
import { LocationFormFactory } from '@zsport/domain/location/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class LocationFormFactoryImpl extends LocationFormFactory {
    public constructor(private locationStateService: LocationStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<LocationEntity> {
        return this.locationStateService.selectSelectedEntity$().pipe(map((entity) => entity as LocationEntity));
    }
}
