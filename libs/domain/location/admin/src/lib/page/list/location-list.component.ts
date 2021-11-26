import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-location-list',
    templateUrl: './location-list.component.html',
    styleUrls: ['./location-list.component.less'],
})
export class LocationListComponent extends BaseComponent implements OnInit {
    public ngOnInit(): void {}
}
