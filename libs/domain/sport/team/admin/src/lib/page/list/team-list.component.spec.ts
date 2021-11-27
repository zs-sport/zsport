import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainSportTeamTableModule } from '@zsport/domain/sport/team/table';

import { TeamListComponent } from './team-list.component';

describe('TeamListComponent', () => {
    let component: TeamListComponent;
    let fixture: ComponentFixture<TeamListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [TeamListComponent],
                imports: [DomainSportTeamTableModule],
                providers: [
                    {
                        provide: DynamicTableService,
                        useValue: {},
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
