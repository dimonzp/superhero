import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import heroesReducer from "./heroes/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";

const reducers = combineReducers({
  heroesPage: heroesReducer,
  form: formReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;
