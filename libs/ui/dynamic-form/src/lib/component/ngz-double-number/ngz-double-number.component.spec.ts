import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzDoubleNumberComponent } from './ngz-double-number.component';

describe('NgzDoubleNumberComponent', () => {
    let component: NgzDoubleNumberComponent;
    let fixture: ComponentFixture<NgzDoubleNumberComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgzDoubleNumberComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzDoubleNumberComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
