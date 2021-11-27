import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainSportTeamTableModule } from '@zsport/domain/sport/team/table';

import { TeamAdminComponent } from './team-admin.component';

describe('TeamAdminComponent', () => {
    let component: TeamAdminComponent;
    let fixture: ComponentFixture<TeamAdminComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TeamAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainSportTeamTableModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
