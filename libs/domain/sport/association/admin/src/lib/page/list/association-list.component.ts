import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-association-list',
    templateUrl: './association-list.component.html',
    styleUrls: ['./association-list.component.less'],
})
export class AssociationListComponent extends BaseComponent implements OnInit {
    public ngOnInit(): void {}
}
