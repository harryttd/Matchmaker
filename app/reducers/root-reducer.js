import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  singles: require('./singles').default,
  selectedPerson: require('./selectedPerson').default
});

export default rootReducer;
