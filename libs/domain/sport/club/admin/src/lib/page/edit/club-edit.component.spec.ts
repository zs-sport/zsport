import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DomainSportClubFormModule } from '@zsport/domain/sport/club/form';

import { ClubEditComponent } from './club-edit.component';

describe('ClubEditComponent', () => {
    let component: ClubEditComponent;
    let fixture: ComponentFixture<ClubEditComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ClubEditComponent],
                imports: [DomainSportClubFormModule],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
