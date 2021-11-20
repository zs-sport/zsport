import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzInputNumberComponent } from './ngz-input-number.component';

describe('NgzInputNumberComponent', () => {
    let component: NgzInputNumberComponent;
    let fixture: ComponentFixture<NgzInputNumberComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzInputNumberComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzInputNumberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
