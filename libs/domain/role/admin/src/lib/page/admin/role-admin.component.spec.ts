import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainRoleTableModule } from '@zsport/domain/role/table';

import { RoleAdminComponent } from './role-admin.component';

describe('RoleAdminComponent', () => {
    let component: RoleAdminComponent;
    let fixture: ComponentFixture<RoleAdminComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RoleAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainRoleTableModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RoleAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
