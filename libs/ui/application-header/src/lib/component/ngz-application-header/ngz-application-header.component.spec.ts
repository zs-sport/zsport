import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzApplicationHeaderComponent } from './ngz-application-header.component';

describe('NgzApplicationHeaderComponent', () => {
    let component: NgzApplicationHeaderComponent;
    let fixture: ComponentFixture<NgzApplicationHeaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzApplicationHeaderComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzApplicationHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
