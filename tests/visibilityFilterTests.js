import { setVisibility } from '../examples/actions';
import { expect } from 'chai';
import creator from '../examples/stores';

export default {
    'should change visibility when SET_VISIBILITY_FILTER action fired': (createStore) => (done) => {
        const store = creator(createStore);

        const initialState = store.getState();

        store.subscribe(() => {
            const nextState = store.getState();

            expect(nextState.visibilityFilter).not.to.equal(initialState.visibilityFilter);
            done();
        });

        store.dispatch(setVisibility(!initialState.visibilityFilter));
    }
};
