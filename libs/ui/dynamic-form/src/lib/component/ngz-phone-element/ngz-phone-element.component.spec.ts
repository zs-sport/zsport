import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzPhoneElementComponent } from './ngz-phone-element.component';

describe('NgzPhoneElementComponent', () => {
    let component: NgzPhoneElementComponent;
    let fixture: ComponentFixture<NgzPhoneElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzPhoneElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzPhoneElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
