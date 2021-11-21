import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzHeaderMenuComponent } from './ngz-header-menu.component';

describe('NgzHeaderMenuComponent', () => {
    let component: NgzHeaderMenuComponent;
    let fixture: ComponentFixture<NgzHeaderMenuComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzHeaderMenuComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzHeaderMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
