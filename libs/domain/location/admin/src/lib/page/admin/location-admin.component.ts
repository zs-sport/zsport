import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent, LocationStateService } from '@zsport/api';

import { LocationAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-location-admin',
    templateUrl: './location-admin.component.html',
    styleUrls: ['./location-admin.component.less'],
})
export class LocationAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions!: string[];
    public isNewEntityButtonEnabled$: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private locationStateService: LocationStateService
    ) {
        super();

        this.initButtonPermissions();

        this.isNewEntityButtonEnabled$ = this.locationStateService.selectNewEntityButtonEnabled$();
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.locationStateService.selectNewEntityButtonEnabled$();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = ['ADMIN', LocationAdminPermissionsService.createLocationEntity];
    }
}
