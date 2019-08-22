import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* deletePet(action) {
    console.log('in deletePet, action.payload is', action.payload);
    try {
        yield axios.delete(`/deletepet/${action.payload}`);
        yield put({ type: 'FETCH_PETS' });
    }
    catch (error) {
        console.log('Error deleting pet', error);
    }
}

function* deletePetSaga() {
    yield takeEvery('DELETE_PET', deletePet);
}

export default deletePetSaga;