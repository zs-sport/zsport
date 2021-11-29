import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-competition-edit',
    templateUrl: './competition-edit.component.html',
    styleUrls: ['./competition-edit.component.less'],
})
export class CompetitionEditComponent extends BaseComponent implements OnInit {
    public ngOnInit(): void {}
}
