import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainUserTableModule } from '@zsport/domain/user/table';

import { UserAdminComponent } from './user-admin.component';

describe('UserAdminComponent', () => {
    let component: UserAdminComponent;
    let fixture: ComponentFixture<UserAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainUserTableModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
