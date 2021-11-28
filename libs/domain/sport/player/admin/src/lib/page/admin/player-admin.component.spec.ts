import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DomainSportPlayerTableModule } from '@zsport/domain/sport/player/table';

import { PlayerAdminComponent } from './player-admin.component';

describe('PlayerAdminComponent', () => {
    let component: PlayerAdminComponent;
    let fixture: ComponentFixture<PlayerAdminComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PlayerAdminComponent],
            imports: [
                HttpClientTestingModule,
                NzButtonModule,
                NzPageHeaderModule,
                RouterTestingModule,
                DomainSportPlayerTableModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerAdminComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
