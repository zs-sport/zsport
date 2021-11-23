import { reducer, initialState } from './association.reducer';

describe('Association Reducer', () => {
    describe('unknown action', () => {
        it('should return the initial state', () => {
            const action = {} as any;
            const result = reducer(initialState, action);

            expect(result).toBe(initialState);
        });
    });
});
