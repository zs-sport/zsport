import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DomainSportTeamFormModule } from '@zsport/domain/sport/team/form';

import { TeamEditComponent } from './team-edit.component';

describe('TeamEditComponent', () => {
    let component: TeamEditComponent;
    let fixture: ComponentFixture<TeamEditComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TeamEditComponent],
                imports: [DomainSportTeamFormModule],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
