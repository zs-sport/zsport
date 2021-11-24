import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainSportAssociationTableModule } from '@zsport/domain/sport/association/table';

import { AssociationAdminComponent } from './association-admin.component';

describe('AssociationAdminComponent', () => {
    let component: AssociationAdminComponent;
    let fixture: ComponentFixture<AssociationAdminComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AssociationAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainSportAssociationTableModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AssociationAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
