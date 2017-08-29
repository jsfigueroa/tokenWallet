//reducer imports
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { qrScanner } from './qrscanner/reducers';
import { wallet } from './wallet/reducers';

export const rootReducer = combineReducers({
    qrScanner,
    wallet
});

//saga imports
import * as walletSagas from './wallet/sagas';
//maps each saga from objectSaga into the rootSaga
export function * rootSaga() {
  try {
    yield all([
      ...Object.values(walletSagas),
    ].map(fork));
    } catch (err) {
      console.log(err)
    }
}
