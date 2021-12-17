import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityQuantitiesComponent } from './entity-quantities.component';

describe('EntityQuantitiesComponent', () => {
    let component: EntityQuantitiesComponent;
    let fixture: ComponentFixture<EntityQuantitiesComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EntityQuantitiesComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EntityQuantitiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
