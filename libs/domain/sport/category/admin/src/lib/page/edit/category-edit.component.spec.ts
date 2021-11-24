import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainSportCategoryFormModule } from '@zsport/domain/sport/category/form';

import { CategoryEditComponent } from './category-edit.component';

describe('CategoryEditComponent', () => {
    let component: CategoryEditComponent;
    let fixture: ComponentFixture<CategoryEditComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryEditComponent],
            imports: [DomainSportCategoryFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
