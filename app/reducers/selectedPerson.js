import axios from 'axios';

// ACTION TYPES
const GET_BOY = "GET_BOY",
  GET_GIRL = "GET_GIRL";

// ACTION CREATORS
const selectBoy = selectedBoy => ({ type: GET_BOY, selectedBoy });
const selectGirl = selectedGirl => ({ type: GET_GIRL, selectedGirl });

// REDUCER
export default (person = {}, action) => {
  switch (action.type) {

    case GET_BOY:
      return action.selectedBoy;

    case GET_GIRL:
      return action.selectedGirl;

    default:
      return person;
  }
};

// DISPATCHERS
export const getSelectedBoy = id => dispatch =>
  axios.get(`/api/boys/${id}`)
  .then(res => dispatch(selectBoy(res.data)))
  .catch(err => console.error('Fetching boy unsuccessful', err));

export const getSelectedGirl = id => dispatch =>
  axios.get(`/api/girls/${id}`)
  .then(res => dispatch(selectGirl(res.data)))
  .catch(err => console.error('Fetching girl unsuccessful', err));
