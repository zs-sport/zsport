import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BaseComponent, PlayerStateService } from '@zsport/api';

import { PlayerAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-player-admin',
    templateUrl: './player-admin.component.html',
    styleUrls: ['./player-admin.component.less'],
})
export class PlayerAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions!: string[];
    public isNewEntityButtonEnabled$: Observable<boolean>;
    private clubId: string;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private sportPlayerStateService: PlayerStateService
    ) {
        super();

        this.initButtonPermissions();

        this.isNewEntityButtonEnabled$ = this.sportPlayerStateService.selectNewEntityButtonEnabled$();
        this.clubId = this.activatedRoute.snapshot.queryParams.clubId;
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute, queryParams: { clubId: this.clubId } });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.sportPlayerStateService.selectNewEntityButtonEnabled$();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = ['ADMIN', PlayerAdminPermissionsService.createPlayerEntity];
    }
}
