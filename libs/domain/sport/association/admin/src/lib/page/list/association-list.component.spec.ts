import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainSportAssociationTableModule } from '@zsport/domain/sport/association/table';

import { AssociationListComponent } from './association-list.component';

describe('AssociationListComponent', () => {
    let component: AssociationListComponent;
    let fixture: ComponentFixture<AssociationListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [AssociationListComponent],
                imports: [DomainSportAssociationTableModule],
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
        fixture = TestBed.createComponent(AssociationListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
