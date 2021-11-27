import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent, TeamStateService } from '@zsport/api';

import { TeamAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-team-admin',
    templateUrl: './team-admin.component.html',
    styleUrls: ['./team-admin.component.less'],
})
export class TeamAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions!: string[];
    public isNewEntityButtonEnabled$: Observable<boolean>;
    private clubId: string;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private sportTeamStateService: TeamStateService
    ) {
        super();

        this.initButtonPermissions();

        this.isNewEntityButtonEnabled$ = this.sportTeamStateService.selectNewEntityButtonEnabled$();
        this.clubId = this.activatedRoute.snapshot.queryParams.clubId;
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute, queryParams: { clubId: this.clubId } });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.sportTeamStateService.selectNewEntityButtonEnabled$();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = ['ADMIN', TeamAdminPermissionsService.createTeamEntity];
    }
}
