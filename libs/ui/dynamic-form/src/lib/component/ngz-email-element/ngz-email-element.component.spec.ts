import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzEmailElementComponent } from './ngz-email-element.component';

describe('NgzEmailElementComponent', () => {
    let component: NgzEmailElementComponent;
    let fixture: ComponentFixture<NgzEmailElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzEmailElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzEmailElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
