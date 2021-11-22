import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent, RoleNames, RoleStateService } from '@zsport/api';

import { RoleAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-role-admin',
    templateUrl: './role-admin.component.html',
    styleUrls: ['./role-admin.component.less'],
})
export class RoleAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions: string[] = [];
    public isNewEntityButtonEnabled$!: Observable<boolean>;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private roleStateService: RoleStateService
    ) {
        super();
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.roleStateService.selectNewEntityButtonEnabled$();

        this.initButtonPermissions();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = [RoleNames.ADMIN, RoleAdminPermissionsService.createRoleEntity];
    }
}
