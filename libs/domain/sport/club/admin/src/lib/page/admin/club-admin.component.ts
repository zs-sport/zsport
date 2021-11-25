import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent, ClubStateService } from '@zsport/api';

import { ClubAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-club-admin',
    templateUrl: './club-admin.component.html',
    styleUrls: ['./club-admin.component.less'],
})
export class ClubAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions!: string[];
    public isNewEntityButtonEnabled$: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private clubStateService: ClubStateService
    ) {
        super();

        this.initButtonPermissions();

        this.isNewEntityButtonEnabled$ = this.clubStateService.selectNewEntityButtonEnabled$();
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.clubStateService.selectNewEntityButtonEnabled$();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = ['ADMIN', ClubAdminPermissionsService.createClubEntity];
    }
}
