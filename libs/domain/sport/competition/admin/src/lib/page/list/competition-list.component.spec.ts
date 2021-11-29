import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainSportCompetitionTableModule } from '@zsport/domain/sport/competition/table';

import { CompetitionListComponent } from './competition-list.component';

describe('CompetitionListComponent', () => {
    let component: CompetitionListComponent;
    let fixture: ComponentFixture<CompetitionListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CompetitionListComponent],
            imports: [DomainSportCompetitionTableModule],
            providers: [
                {
                    provide: DynamicTableService,
                    useValue: {},
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CompetitionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
