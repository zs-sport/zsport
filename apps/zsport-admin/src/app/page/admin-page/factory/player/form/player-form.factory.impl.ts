import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { PlayerEntity, PlayerStateService } from '@zsport/api';
import { PlayerFormFactory } from '@zsport/domain/sport/player/form';
import { NgzDynamicFormComponent } from '@zsport/ui/dynamic-form';

@Injectable()
export class PlayerFormFactoryImpl extends PlayerFormFactory {
    public constructor(private playerStateService: PlayerStateService) {
        super();
    }

    public createDynamicComponent(): any {
        return NgzDynamicFormComponent;
    }

    public getEntity$(): Observable<PlayerEntity> {
        return this.playerStateService.selectSelectedEntity$().pipe(map((entity) => entity as PlayerEntity));
    }
}
