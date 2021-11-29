import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCompetitionFormComponent } from './event-competition-form.component';

describe('EventCompetitionFormComponent', () => {
    let component: EventCompetitionFormComponent;
    let fixture: ComponentFixture<EventCompetitionFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EventCompetitionFormComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventCompetitionFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
