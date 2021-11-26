import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainLocationTableModule } from '@zsport/domain/location/table';

import { LocationListComponent } from './location-list.component';

describe('LocationListComponent', () => {
    let component: LocationListComponent;
    let fixture: ComponentFixture<LocationListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [LocationListComponent],
                imports: [DomainLocationTableModule],
                providers: [
                    {
                        provide: DynamicTableService,
                        useValue: {},
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
