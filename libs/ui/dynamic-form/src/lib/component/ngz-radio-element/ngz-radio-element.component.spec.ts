import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzRadioElementComponent } from './ngz-radio-element.component';

describe('NgzRadioElementComponent', () => {
    let component: NgzRadioElementComponent;
    let fixture: ComponentFixture<NgzRadioElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzRadioElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzRadioElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
