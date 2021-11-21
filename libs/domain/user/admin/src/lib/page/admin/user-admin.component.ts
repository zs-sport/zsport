import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent, RoleNames } from '@zsport/api';

import { UserAdminPermissionsService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-user-admin',
    templateUrl: './user-admin.component.html',
    styleUrls: ['./user-admin.component.less'],
})
export class UserAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions: string[] = [];
    @Input()
    public isAddEntityButton = false;

    public constructor(private activatedRoute: ActivatedRoute, private router: Router) {
        super();
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public ngOnInit(): void {
        this.initButtonPermissions();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = [RoleNames.ADMIN, UserAdminPermissionsService.createUserEntity];
    }
}
