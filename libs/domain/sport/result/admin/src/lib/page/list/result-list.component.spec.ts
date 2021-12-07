import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainSportResultTableModule } from '@zsport/domain/sport/result/table';

import { ResultListComponent } from './result-list.component';

describe('ResultListComponent', () => {
    let component: ResultListComponent;
    let fixture: ComponentFixture<ResultListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ResultListComponent],
            imports: [DomainSportResultTableModule],
            providers: [
                {
                    provide: DynamicTableService,
                    useValue: {},
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
