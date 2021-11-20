import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzSelectIconElementComponent } from './ngz-select-icon-element.component';

describe('NgzSelectIconElementComponent', () => {
    let component: NgzSelectIconElementComponent;
    let fixture: ComponentFixture<NgzSelectIconElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzSelectIconElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzSelectIconElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
