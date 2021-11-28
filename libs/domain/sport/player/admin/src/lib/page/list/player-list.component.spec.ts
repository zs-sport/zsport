import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainSportPlayerTableModule } from '@zsport/domain/sport/player/table';

import { PlayerListComponent } from './player-list.component';

describe('PlayerListComponent', () => {
    let component: PlayerListComponent;
    let fixture: ComponentFixture<PlayerListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PlayerListComponent],
                imports: [DomainSportPlayerTableModule],
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
        fixture = TestBed.createComponent(PlayerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
