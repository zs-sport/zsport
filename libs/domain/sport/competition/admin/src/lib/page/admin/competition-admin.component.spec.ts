import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainSportCompetitionTableModule } from '@zsport/domain/sport/competition/table';

import { CompetitionAdminComponent } from './competition-admin.component';

describe('CompetitionAdminComponent', () => {
    let component: CompetitionAdminComponent;
    let fixture: ComponentFixture<CompetitionAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompetitionAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainSportCompetitionTableModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompetitionAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
