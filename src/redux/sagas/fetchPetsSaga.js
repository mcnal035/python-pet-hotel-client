import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchPets(action) {
    console.log('in fetchPets, action.payload is', action.payload)
    try {
        const response = yield axios.get(`/getpets`);
        console.log('in fetchPets, response is:', response.data)
        yield put({ type: 'SET_PETS', payload: response.data })
    } catch (error) {
        console.log('Error retrieving pets:', error);
    }
}

function* fetchPetsSaga() {
    yield takeEvery('FETCH_PETS', fetchPets);
}

export default fetchPetsSaga;
