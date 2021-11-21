import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { UserStateService } from '@zsport/api';

@Injectable()
export class ListResolverService implements Resolve<void> {
    constructor(private userStateService: UserStateService) {}

    public resolve(): void {
        this.userStateService.dispatchListEntitiesAction();
        this.userStateService.dispatchSetSelectedEntityIdAction('');
    }
}
