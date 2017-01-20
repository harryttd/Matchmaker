import axios from 'axios';

// ACTION TYPES
const GET_MATCHES = "GET_MATCHES";

// ACTION CREATORS
const matches = selectedPerson => ({ type: GET_MATCHES, selectedPerson });

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
export const getMatches = person => dispatch =>
  axios.get(`/api/match/${person.indexId}`)
  .then(res => dispatch(matches(res.data)))
  .catch(err => console.error(`Fetching matches for ${person.firstName} ${person.lastName} unsuccessful`, err));
