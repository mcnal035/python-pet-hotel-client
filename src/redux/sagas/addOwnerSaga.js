import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addOwner(action) {
    console.log('in addOwner, action.payload is', action.payload);
    try {
        yield axios.post(`/addowner`, action.payload);
        yield put({ type: 'FETCH_OWNERS' });
    }
    catch (error) {
        console.log('Error adding owner', error);
    }
}

function* addOwnerSaga() {
    yield takeEvery('ADD_OWNER', addOwner);
}

export default addOwnerSaga;