import { put, call, take, takeEvery } from 'redux-saga/effects'
import { apiFetchData } from '../api'
import runCmd from './runCmd'

export default function* mainSaga() {

  yield takeEvery('RUN_CMD', runCmd);
  //yield put(addWorkshop({title:'BUM1'}));
  //yield call(getMyIndex);
  // load open workshops
  // load my workshops
}
