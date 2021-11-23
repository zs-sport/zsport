import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationTableComponent } from './association-table.component';

describe('AssociationTableComponent', () => {
    let component: AssociationTableComponent;
    let fixture: ComponentFixture<AssociationTableComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AssociationTableComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AssociationTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
