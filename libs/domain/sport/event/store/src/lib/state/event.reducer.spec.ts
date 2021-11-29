import { reducer, initialState } from './event.reducer';

describe('Event Reducer', () => {
    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
