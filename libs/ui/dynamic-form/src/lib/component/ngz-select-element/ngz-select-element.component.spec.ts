import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzSelectElementComponent } from './ngz-select-element.component';

describe('NgzSelectElementComponent', () => {
    let component: NgzSelectElementComponent;
    let fixture: ComponentFixture<NgzSelectElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzSelectElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzSelectElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
