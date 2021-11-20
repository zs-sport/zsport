import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzCheckboxElementComponent } from './ngz-checkbox-element.component';

describe('NgzCheckboxElementComponent', () => {
    let component: NgzCheckboxElementComponent;
    let fixture: ComponentFixture<NgzCheckboxElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzCheckboxElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzCheckboxElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
