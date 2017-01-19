import axios from 'axios';

// ACTION TYPES
const ALL_SINGLES = "ALL_SINGLES",
  GET_BOYS = "GET_BOYS",
  GET_GIRLS = "GET_GIRLS";

// ACTION CREATORS
const allSingles = singles => ({ type: ALL_SINGLES, singles });
const getBoys = boys => ({ type: GET_BOYS, boys });
const getGirls = girls => ({ type: GET_GIRLS, girls });

// REDUCER
export default (singles = [], action) => {
  switch (action.type) {

    case ALL_SINGLES:
      // return [...action.singles.boys, ...action.singles.girls];
      return {
        boys: action.singles.boys,
        girls: action.singles.girls
      };


    case GET_BOYS:
      return action.boys;

    case GET_GIRLS:
      return action.girls;

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

export const getAllGirls = () => dispatch =>
  axios.get(`/api/girls`)
  .then(res => dispatch(getGirls(res.data)))
  .catch(err => console.error('Fetching all girls unsuccessful', err));
