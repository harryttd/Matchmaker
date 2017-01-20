import axios from 'axios';

// ACTION TYPES
const GET_MATCHES = "GET_MATCHES";

// ACTION CREATORS
const match = matches => ({ type: GET_MATCHES, matches });

// REDUCER
export default (person = {}, action) => {
  switch (action.type) {

    case GET_MATCHES:
      return action.matches;

    default:
      return person;
  }
};

// DISPATCHERS
export const getMatches = person => dispatch => {
  axios.get(`/api/${person.gender}/match/${person.indexId}`)
  .then(res => dispatch(match(res.data)))
  .catch(err => console.error(`Fetching matches for ${person.firstName} ${person.lastName} unsuccessful`, err));
};
