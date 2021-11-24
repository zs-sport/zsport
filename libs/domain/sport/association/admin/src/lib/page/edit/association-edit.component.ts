import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-association-edit',
    templateUrl: './association-edit.component.html',
    styleUrls: ['./association-edit.component.less'],
})
export class AssociationEditComponent extends BaseComponent implements OnInit {
    public ngOnInit(): void {}
}
