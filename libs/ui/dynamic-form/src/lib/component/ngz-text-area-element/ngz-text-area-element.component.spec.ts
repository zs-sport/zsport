import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzTextAreaElementComponent } from './ngz-text-area-element.component';

describe('NgzTextAreaElementComponent', () => {
    let component: NgzTextAreaElementComponent;
    let fixture: ComponentFixture<NgzTextAreaElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzTextAreaElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzTextAreaElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
