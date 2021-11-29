import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-event-edit',
    templateUrl: './event-edit.component.html',
    styleUrls: ['./event-edit.component.less'],
})
export class EventEditComponent extends BaseComponent implements OnInit {
    public eventId: string | null = null;

    public constructor(private activatedRoute: ActivatedRoute) {
        super();
    }

    public ngOnInit(): void {
        this.eventId = this.activatedRoute.snapshot.params.eventId;
    }
}
