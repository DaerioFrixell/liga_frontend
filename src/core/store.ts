import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { feedbacksReducer } from '../models/feedbacks/feedbacksReducer';
import { lessonsReducer } from '../models/lessons/lessonsReducer';
import thunk from "redux-thunk";

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose; }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const rootReducer = combineReducers({
  feedback: feedbacksReducer,
  lessons: lessonsReducer
})

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>
export default store;