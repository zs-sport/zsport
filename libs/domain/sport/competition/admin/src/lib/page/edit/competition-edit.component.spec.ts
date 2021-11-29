import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainSportCompetitionFormModule } from '@zsport/domain/sport/competition/form';

import { CompetitionEditComponent } from './competition-edit.component';

describe('CompetitionEditComponent', () => {
    let component: CompetitionEditComponent;
    let fixture: ComponentFixture<CompetitionEditComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CompetitionEditComponent],
            imports: [DomainSportCompetitionFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CompetitionEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
