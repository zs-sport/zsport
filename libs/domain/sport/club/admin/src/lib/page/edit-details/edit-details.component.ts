import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-edit-details',
    templateUrl: './edit-details.component.html',
    styleUrls: ['./edit-details.component.scss'],
})
export class EditDetailsComponent {}
