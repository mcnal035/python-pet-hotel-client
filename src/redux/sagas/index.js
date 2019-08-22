import { all } from 'redux-saga/effects';
import fetchPetsSaga from './fetchPetsSaga';
import fetchOwnersSaga from './fetchOwnersSaga';
import addOwnerSaga from './addOwnerSaga';
import addPetSaga from './addPetSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
    yield all([
        fetchPetsSaga(),
    ]);
}