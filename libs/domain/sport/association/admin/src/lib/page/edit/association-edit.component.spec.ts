import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainSportAssociationFormModule } from '@zsport/domain/sport/association/form';

import { AssociationEditComponent } from './association-edit.component';

describe('AssociationEditComponent', () => {
    let component: AssociationEditComponent;
    let fixture: ComponentFixture<AssociationEditComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AssociationEditComponent],
            imports: [DomainSportAssociationFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AssociationEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
