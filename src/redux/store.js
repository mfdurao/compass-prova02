import { createStore as create, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";

import rootSaga from "./sagas";
import rootReducer from "./reducers";

export const createStore = () => {
  const middleware = [logger];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const store = create(rootReducer, applyMiddleware(...middleware));

  sagaMiddleware.run(rootSaga);
  

  return { store };
};
