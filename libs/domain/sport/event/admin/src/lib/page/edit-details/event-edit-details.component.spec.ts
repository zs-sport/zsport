import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainSportEventFormModule } from '@zsport/domain/sport/event/form';

import { EventEditDetailsComponent } from './event-edit-details.component';

describe('EventEditDetailsComponent', () => {
    let component: EventEditDetailsComponent;
    let fixture: ComponentFixture<EventEditDetailsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EventEditDetailsComponent],
            imports: [DomainSportEventFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventEditDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
