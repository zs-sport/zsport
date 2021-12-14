import { Observable, Subject } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent, Competition, EventStateService } from '@zsport/api';

import { EventAdminPermissionsService, EventAdminService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [EventAdminService],
    selector: 'zs-event-admin',
    templateUrl: './event-admin.component.html',
    styleUrls: ['./event-admin.component.less'],
})
export class EventAdminComponent extends BaseComponent implements OnInit {
    public buttonPermissions!: string[];
    public compareEntities = (o1: any, o2: any): boolean => {
        return this.componentService.compareEntities(o1, o2);
    };

    public competitions$$: Subject<Competition[]>;
    public isNewEntityButtonEnabled$: Observable<boolean>;
    public selectedValue!: any;

    public constructor(
        private activatedRoute: ActivatedRoute,
        private componentService: EventAdminService,
        private router: Router,
        private eventStateService: EventStateService
    ) {
        super();

        this.initButtonPermissions();

        this.competitions$$ = new Subject();
        this.isNewEntityButtonEnabled$ = this.eventStateService.selectNewEntityButtonEnabled$();
    }

    public clickHandler(): void {
        this.router.navigate(['edit', 0], { relativeTo: this.activatedRoute });
    }

    public competitionChangeHandler(event: any): void {
        this.componentService.onCompetitionChangeHandler(event);
    }

    public ngOnInit(): void {
        this.isNewEntityButtonEnabled$ = this.eventStateService.selectNewEntityButtonEnabled$();

        this.componentService.init$(this.competitions$$).pipe().subscribe();
    }

    private initButtonPermissions(): void {
        this.buttonPermissions = ['ADMIN', EventAdminPermissionsService.createEventEntity];
    }
}
