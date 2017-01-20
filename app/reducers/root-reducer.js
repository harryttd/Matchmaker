import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  singles: require('./singles').default,
  selectedPerson: require('./selectedPerson').default,
  matches: require('./matches').default
});

export default rootReducer;
