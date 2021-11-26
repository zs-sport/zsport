import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainLocationFormModule } from '@zsport/domain/location/form';

import { LocationEditComponent } from './location-edit.component';

describe('LocationEditComponent', () => {
    let component: LocationEditComponent;
    let fixture: ComponentFixture<LocationEditComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LocationEditComponent],
            imports: [DomainLocationFormModule],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
