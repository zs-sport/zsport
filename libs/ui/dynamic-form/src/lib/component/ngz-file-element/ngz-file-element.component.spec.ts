import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzFileElementComponent } from './ngz-file-element.component';

describe('NgzFileElementComponent', () => {
    let component: NgzFileElementComponent;
    let fixture: ComponentFixture<NgzFileElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzFileElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzFileElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
