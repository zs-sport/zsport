import { TestBed } from '@angular/core/testing';

import { PlayerFormService } from './player-form.service';

describe('PlayerFormService', () => {
    let service: PlayerFormService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlayerFormService],
        });

        service = TestBed.inject(PlayerFormService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
