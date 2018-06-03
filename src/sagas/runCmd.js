import { delay } from 'redux-saga'
import { put, fork, select } from 'redux-saga/effects'
import sendMsg from './sendMsg'
import debug from '../include/debug'

export default function* runCmd(action) {
  if(debug(action,'runCmd').cmd!=='') {
    //yield fork(sendMsg,action);
    yield put({type:action.cmd});
  }
}
