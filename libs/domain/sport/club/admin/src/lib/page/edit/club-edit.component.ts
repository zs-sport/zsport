import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-club-edit',
    templateUrl: './club-edit.component.html',
    styleUrls: ['./club-edit.component.less'],
})
export class ClubEditComponent extends BaseComponent implements OnInit {
    public clubId = null;

    public constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    public ngOnInit(): void {
        this.clubId = this.activatedRoute.snapshot.params.clubId;
    }
}
