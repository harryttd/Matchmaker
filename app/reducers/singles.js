import axios from 'axios';

// ACTION TYPES
const ALL_SINGLES = "ALL_SINGLES",
  GET_BOYS = "GET_BOYS",
  GET_BOY = "GET_BOY",
  GET_GIRLS = "GET_GIRLS",
  GET_GIRL = "GET_GIRL";

// ACTION CREATORS
const allSingles = singles => ({ type: ALL_SINGLES, singles });
const getBoys = boys => ({ type: GET_BOYS, boys });
const selectBoy = selectedBoy => ({ type: GET_BOY, selectedBoy });
const getGirls = girls => ({ type: GET_GIRLS, girls });
const selectGirl = selectedGirl => ({ type: GET_GIRL, selectedGirl });

// REDUCER
export default (singles = [], action) => {
  switch (action.type) {

    case ALL_SINGLES:
      return [...action.singles.boys, ...action.singles.girls];

    case GET_BOYS:
      return action.boys;

    case GET_BOY:
      return action.selectedBoy;

    case GET_GIRLS:
      return action.girls;

    case GET_GIRL:
      return action.selectedGirl;

    default:
      return singles;
  }
};

// DISPATCHERS
export const getAllSingles = () => dispatch =>
  axios.get(`/api/all`)
  .then(res => dispatch(allSingles(res.data)))
  .catch(err => console.error('Fetching all singles unsuccessful', err));

export const getAllBoys = () => dispatch =>
  axios.get(`/api/boys`)
  .then(res => dispatch(getBoys(res.data)))
  .catch(err => console.error('Fetching all boys unsuccessful', err));

export const getSelectedBoy = id => dispatch =>
  axios.get(`/api/boys/${id}`)
  .then(res => dispatch(selectBoy(res.data)))
  .catch(err => console.error('Fetching boy unsuccessful', err));

export const getAllGirls = () => dispatch =>
  axios.get(`/api/girls`)
  .then(res => dispatch(getGirls(res.data)))
  .catch(err => console.error('Fetching all girls unsuccessful', err));

export const getSelectedGirl = id => dispatch => {
  console.log(id);
  axios.get(`/api/girls/${id}`)
  .then(res => {
    console.log("GIRL DATA", res.data);
    return dispatch(selectGirl(res.data))
  })
  .catch(err => console.error('Fetching girl unsuccessful', err));
}
