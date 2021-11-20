import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzDynamicFormComponent } from './ngz-dynamic-form.component';

describe('NgzDynamicFormComponent', () => {
    let component: NgzDynamicFormComponent;
    let fixture: ComponentFixture<NgzDynamicFormComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzDynamicFormComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzDynamicFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
