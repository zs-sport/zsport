import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgzColorCircleElementComponent } from './ngz-color-circle-element.component';

describe('NgxColorCircleElementComponent', () => {
    let component: NgzColorCircleElementComponent;
    let fixture: ComponentFixture<NgzColorCircleElementComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NgzColorCircleElementComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzColorCircleElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
