import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchOwners(action) {
    console.log('in fetchOwners, action.payload is', action.payload)
    try {
        const response = yield axios.get(`/getowners`);
        console.log('in fetchOwners, response is:', response.data)
        yield put({ type: 'SET_OWNERS', payload: response.data })
    } catch (error) {
        console.log('Error retrieving pets:', error);
    }
}

function* fetchOwnersSaga() {
    yield takeEvery('FETCH_OWNERS', fetchOwners);
}

export default fetchOwnersSaga;
