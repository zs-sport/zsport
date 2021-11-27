import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent, PersonStateService } from '@zsport/api';

import { PersonAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-person-admin',
    templateUrl: './person-admin.component.html',
    styleUrls: ['./person-admin.component.less'],
})
export class PersonAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions!: string[];
    public isNewEntityButtonEnabled$: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private personStateService: PersonStateService
    ) {
        super();

        this.initButtonPermissions();

        this.isNewEntityButtonEnabled$ = this.personStateService.selectNewEntityButtonEnabled$();
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.personStateService.selectNewEntityButtonEnabled$();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = ['ADMIN', PersonAdminPermissionsService.createPersonEntity];
    }
}
