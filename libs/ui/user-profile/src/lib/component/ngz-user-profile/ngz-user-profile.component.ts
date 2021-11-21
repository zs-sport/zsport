import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserProfileComponent } from '@zsport/shared';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-ngz-user-profile',
    templateUrl: './ngz-user-profile.component.html',
    styleUrls: ['./ngz-user-profile.component.less'],
})
export class NgzUserProfileComponent extends UserProfileComponent {
    public constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    protected init(): void {}
}
