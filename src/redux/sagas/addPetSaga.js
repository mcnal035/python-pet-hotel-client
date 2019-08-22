import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addPet(action) {
    console.log('in addPet, action.payload is', action.payload);
    try {
        yield axios.post(`/addpets`, action.payload);
        yield put({ type: 'FETCH_PETS' });
    }
    catch (error) {
        console.log('Error adding pet', error);
    }
}

function* addPetSaga() {
    yield takeEvery('ADD_PET', addPet);
}

export default addPetSaga;