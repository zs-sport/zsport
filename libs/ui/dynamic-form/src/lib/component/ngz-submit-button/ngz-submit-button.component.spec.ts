import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzSubmitButtonComponent } from './ngz-submit-button.component';

describe('NgzSubmitButtonComponent', () => {
    let component: NgzSubmitButtonComponent;
    let fixture: ComponentFixture<NgzSubmitButtonComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzSubmitButtonComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzSubmitButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
