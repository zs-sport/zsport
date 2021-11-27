import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PersonTableModule } from '@zs-soft/person/table';

import { PersonAdminComponent } from './person-admin.component';

describe('PersonAdminComponent', () => {
    let component: PersonAdminComponent;
    let fixture: ComponentFixture<PersonAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PersonAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                PersonTableModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
