import { expect } from 'chai';
import { setVisibility } from '../examples/actions';
import creator from '../examples/stores';

describe('store', () => {
    it('should change visibility when SET_VISIBILITY_FILTER action fired', (done) => {
        const store = creator();

        const initialState = store.getState();

        store.subscribe(() => {
            const nextState = store.getState();

            expect(nextState.visibilityFilter).not.to.equal(initialState.visibilityFilter);
            done();
        });

        store.dispatch(setVisibility(!initialState.visibilityFilter));
    });
});
