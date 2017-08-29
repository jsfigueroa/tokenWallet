import { createStore , applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga, rootReducer } from './modules';
import devToolsEnhancer from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  devToolsEnhancer({
        hostname: 'localhost',
        port: 5678})
);

export default createStore(rootReducer, {}, enhancer );
sagaMiddleware.run(rootSaga);
