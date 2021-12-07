import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainSportResultTableModule } from '@zsport/domain/sport/result/table';

import { ResultAdminComponent } from './result-admin.component';

describe('ResultAdminComponent', () => {
    let component: ResultAdminComponent;
    let fixture: ComponentFixture<ResultAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ResultAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainSportResultTableModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ResultAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
