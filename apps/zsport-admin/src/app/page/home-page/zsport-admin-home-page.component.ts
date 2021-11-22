import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zsport-admin-home-page',
    templateUrl: './zsport-admin-home-page.component.html',
    styleUrls: ['./zsport-admin-home-page.component.less'],
})
export class ZsportAdminHomePageComponent implements OnInit {
    public ngOnInit(): void {}
}
