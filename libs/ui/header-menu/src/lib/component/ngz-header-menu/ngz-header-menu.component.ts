import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderMenuComponent } from '@zsport/shared';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-ngz-header-menu',
    templateUrl: './ngz-header-menu.component.html',
    styleUrls: ['./ngz-header-menu.component.less'],
})
export class NgzHeaderMenuComponent extends HeaderMenuComponent {
    public constructor() {
        super();
    }

    protected init(): void {}
}
