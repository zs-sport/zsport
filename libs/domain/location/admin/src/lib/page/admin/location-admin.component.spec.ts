import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainLocationTableModule } from '@zsport/domain/location/table';

import { LocationAdminComponent } from './location-admin.component';

describe('LocationAdminComponent', () => {
    let component: LocationAdminComponent;
    let fixture: ComponentFixture<LocationAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LocationAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainLocationTableModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LocationAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
