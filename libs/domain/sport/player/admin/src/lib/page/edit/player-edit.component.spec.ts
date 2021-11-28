import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DomainSportPlayerFormModule } from '@zsport/domain/sport/player/form';

import { PlayerEditComponent } from './player-edit.component';

describe('PlayerEditComponent', () => {
    let component: PlayerEditComponent;
    let fixture: ComponentFixture<PlayerEditComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PlayerEditComponent],
                imports: [DomainSportPlayerFormModule],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(PlayerEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
