import { put, call, takeLatest } from 'redux-saga/effects'

const getIss = () => {
    return fetch('http://api.open-notify.org/iss-now.json')
      .then(response => ({ response }))
      .catch(error => ({ error }))
  }
  
  function* getIssSaga() {
    const { response, error } = yield call(getIss)
    console.log(response);
    if (response) {
      const data = yield response.json()
      yield put({ type: 'GET_ISS_POSITION', payload: data })
    } else {
      console.log('error: ', error.message)
      //yield put({ type: 'GET_USERS_FAILED', message: error.message })
    }
  }
  
  export default function* rootSaga() {
    yield [
      takeLatest('GET_ISS_POSITION', getIssSaga)
    ]
  }