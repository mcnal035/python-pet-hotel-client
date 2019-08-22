import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* deleteOwner(action) {
    console.log('in deleteOwner, action.payload is', action.payload);
    try {
        yield axios.delete(`/deleteowner/${action.payload}`);
        yield put({ type: 'FETCH_OWNERS' });
    }
    catch (error) {
        console.log('Error deleting owner', error);
    }
}

function* deleteOwnerSaga() {
    yield takeEvery('DELETE_OWNER', deleteOwner);
}

export default deleteOwnerSaga;