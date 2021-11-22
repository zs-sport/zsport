import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EnvironmentType } from '@zsport/api';

import { environment } from '../environments/environment';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zsport-admin-root',
    templateUrl: './zsport-admin-app.component.html',
    styleUrls: ['./zsport-admin-app.component.less'],
})
export class ZsportAdminAppComponent {
    public version = environment.version;
    public environmentType: EnvironmentType = environment.type as EnvironmentType;
    public title = 'ZsportAdmin';

    public constructor() {}
}
