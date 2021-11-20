import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzCancelButtonComponent } from './ngz-cancel-button.component';

describe('NgzCancelButtonComponent', () => {
    let component: NgzCancelButtonComponent;
    let fixture: ComponentFixture<NgzCancelButtonComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzCancelButtonComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzCancelButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
