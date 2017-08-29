import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import {
  ADD_PRIV_KEY,
  addPrivKey,
  ADD_PUB_KEY,
  addPubKey
} from './actions';

import {
  SCAN_QR,
  scanQR
} from '../qrscanner/actions';

  // import {
  //
  // } from '../qrscanner/api';

function* callGetQr(action) {
  try {
    console.log("scanning a qr...")
    //const { error, response } = yield call(createDevice, action);
    yield put({type:'QR_SCANNED', payload:action.data});
  } catch(err) {
    console.log("err calling QR scanner (wallet callGetQr saga)")
  }
}

export function* addPrivKeySaga() {
  yield takeLatest(ADD_PRIV_KEY, callGetQr);
}
