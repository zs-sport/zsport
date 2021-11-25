import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClubTableComponent } from './club-table.component';

describe('SportClubTableComponent', () => {
    let component: ClubTableComponent;
    let fixture: ComponentFixture<ClubTableComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ClubTableComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
