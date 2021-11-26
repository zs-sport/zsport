import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-location-edit',
    templateUrl: './location-edit.component.html',
    styleUrls: ['./location-edit.component.less'],
})
export class LocationEditComponent extends BaseComponent implements OnInit {
    public constructor() {
        super();
    }

    public ngOnInit(): void {}
}
