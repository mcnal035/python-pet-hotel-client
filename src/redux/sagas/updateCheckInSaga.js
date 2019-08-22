import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* updateCheckIn(action) {
    console.log('in updateCheckIn, action.payload is', action.payload);
    try {
        yield axios.delete(`/updateCheckIn/${action.payload}`);
        yield put({ type: 'FETCH_PETS' })
    }
    catch (error) {
        console.log('Error updating pet check in status', error);
    }
}

function* updateCheckInSaga() {
    yield takeEvery('UPDATE_CHECK_IN', updateCheckIn);
}

export default updateCheckInSaga;