import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzDatePickerElementComponent } from './ngz-date-picker-element.component';

describe('NgzDatePickerElementComponent', () => {
    let component: NgzDatePickerElementComponent;
    let fixture: ComponentFixture<NgzDatePickerElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzDatePickerElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzDatePickerElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
