import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  singles: require('./singles').default
});

export default rootReducer;
