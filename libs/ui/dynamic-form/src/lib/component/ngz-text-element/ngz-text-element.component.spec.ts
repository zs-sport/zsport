import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzTextElementComponent } from './ngz-text-element.component';

describe('NgzTextElementComponent', () => {
    let component: NgzTextElementComponent;
    let fixture: ComponentFixture<NgzTextElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzTextElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzTextElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
