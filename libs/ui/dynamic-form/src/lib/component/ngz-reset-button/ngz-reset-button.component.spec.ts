import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzResetButtonComponent } from './ngz-reset-button.component';

describe('NgzResetButtonComponent', () => {
    let component: NgzResetButtonComponent;
    let fixture: ComponentFixture<NgzResetButtonComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzResetButtonComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzResetButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
