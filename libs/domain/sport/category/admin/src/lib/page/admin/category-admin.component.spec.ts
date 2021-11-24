import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainSportCategoryFormModule } from '@zsport/domain/sport/category/form';
import { DomainSportCategoryTableModule } from '@zsport/domain/sport/category/table';

import { CategoryAdminComponent } from './category-admin.component';

describe('CategoryAdminComponent', () => {
    let component: CategoryAdminComponent;
    let fixture: ComponentFixture<CategoryAdminComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainSportCategoryFormModule,
                DomainSportCategoryTableModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
