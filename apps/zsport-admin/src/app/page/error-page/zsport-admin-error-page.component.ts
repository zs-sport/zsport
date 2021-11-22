import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zsport-admin-error',
    templateUrl: './zsport-admin-error-page.component.html',
    styleUrls: ['./zsport-admin-error-page.component.scss'],
})
export class ZsportAdminErrorPageComponent implements OnInit {
    public constructor() {}

    public ngOnInit() {}
}
