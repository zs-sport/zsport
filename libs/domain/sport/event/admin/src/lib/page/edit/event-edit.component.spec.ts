import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainSportEventFormModule } from '@zsport/domain/sport/event/form';

import { EventEditComponent } from './event-edit.component';

describe('EventEditComponent', () => {
    let component: EventEditComponent;
    let fixture: ComponentFixture<EventEditComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [EventEditComponent],
            imports: [DomainSportEventFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
