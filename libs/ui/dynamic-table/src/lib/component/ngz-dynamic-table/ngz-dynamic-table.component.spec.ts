import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzDynamicTableComponent } from './ngz-dynamic-table.component';

describe('NgzDynamicTableComponent', () => {
    let component: NgzDynamicTableComponent;
    let fixture: ComponentFixture<NgzDynamicTableComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzDynamicTableComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzDynamicTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
