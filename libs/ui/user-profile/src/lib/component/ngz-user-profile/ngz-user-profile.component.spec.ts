import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzUserProfileComponent } from './ngz-user-profile.component';

describe('NgzUserProfileComponent', () => {
    let component: NgzUserProfileComponent;
    let fixture: ComponentFixture<NgzUserProfileComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzUserProfileComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzUserProfileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
