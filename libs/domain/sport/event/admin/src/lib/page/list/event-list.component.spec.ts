import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainSportEventTableModule } from '@zsport/domain/sport/event/table';

import { EventListComponent } from './event-list.component';

describe('EventListComponent', () => {
    let component: EventListComponent;
    let fixture: ComponentFixture<EventListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventListComponent],
            imports: [DomainSportEventTableModule],
            providers: [
                {
                    provide: DynamicTableService,
                    useValue: {},
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
