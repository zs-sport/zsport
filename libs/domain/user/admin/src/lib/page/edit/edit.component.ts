import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-user-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.less'],
})
export class EditComponent extends BaseComponent implements OnInit {
    public userId = null;

    public constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    public ngOnInit(): void {
        this.userId = this.activatedRoute.snapshot.params.userId;
    }
}
