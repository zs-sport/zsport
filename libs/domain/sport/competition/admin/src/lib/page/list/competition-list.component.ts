import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-competition-list',
    templateUrl: './competition-list.component.html',
    styleUrls: ['./competition-list.component.less'],
})
export class CompetitionListComponent extends BaseComponent implements OnInit {
    public ngOnInit(): void {}
}
