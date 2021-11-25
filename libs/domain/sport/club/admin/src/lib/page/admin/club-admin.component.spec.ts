import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainSportClubTableModule } from '@zsport/domain/sport/club/table';

import { ClubAdminComponent } from './club-admin.component';

describe('ClubAdminComponent', () => {
    let component: ClubAdminComponent;
    let fixture: ComponentFixture<ClubAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ClubAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainSportClubTableModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ClubAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
