import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.less'],
})
export class RoleEditComponent extends BaseComponent implements OnInit {
    public roleId!: string;

    public constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    public ngOnInit(): void {
        this.roleId = this.activatedRoute.snapshot.params.userId;
    }
}
