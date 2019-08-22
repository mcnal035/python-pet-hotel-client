import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addPet(action) {
    console.log('in addPet, action.payload is', action.payload);
    try {
        yield axios.post(`/addpets?name=${action.payload.name}&breed=${action.payload.breed}&color=${action.payload.color}&owner_name=${action.payload.owner_name}&checked_in=no`);
        // yield axios.post(`/addpets`, action.payload);
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