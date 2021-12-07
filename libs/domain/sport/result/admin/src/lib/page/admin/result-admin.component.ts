import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent, ResultStateService } from '@zsport/api';

import { ResultAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-result-admin',
    templateUrl: './result-admin.component.html',
    styleUrls: ['./result-admin.component.less'],
})
export class ResultAdminComponent extends BaseComponent implements OnInit {
    private matchId: string;

    public buttonPermissions!: string[];
    public isNewEntityButtonEnabled$: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private resultStateService: ResultStateService
    ) {
        super();

        this.initButtonPermissions();

        this.isNewEntityButtonEnabled$ = this.resultStateService.selectNewEntityButtonEnabled$();

        this.matchId = this.activatedRoute.snapshot.queryParams.matchId;
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute, queryParams: { matchId: this.matchId } });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.resultStateService.selectNewEntityButtonEnabled$();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = ['ADMIN', ResultAdminPermissionsService.createResultEntity];
    }
}
