import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainSportCategoryTableModule } from '@zsport/domain/sport/category/table';

import { CategoryListComponent } from './category-list.component';

describe('CategoryListComponent', () => {
    let component: CategoryListComponent;
    let fixture: ComponentFixture<CategoryListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CategoryListComponent],
            imports: [DomainSportCategoryTableModule],
            providers: [
                {
                    provide: DynamicTableService,
                    useValue: {},
                },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoryListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
