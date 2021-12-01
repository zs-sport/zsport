import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentFinalComponent } from './tournament-final.component';

describe('TournamentFinalComponent', () => {
    let component: TournamentFinalComponent;
    let fixture: ComponentFixture<TournamentFinalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TournamentFinalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TournamentFinalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
